"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import {
  Check,
  Upload,
  ArrowRight,
  ArrowLeft,
  Mail,
  Building,
  FileText,
  User,
  CheckCircle,
  Loader2,
  DollarSign,
  Sparkles,
  MapPin,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { useDebounce } from "@/hooks/use-debounce"
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function uploadFilesDirect(files: File[]): Promise<string[]> {
  const urls: string[] = [];
  for (const file of files) {
    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      // Upload image or PDF directly
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('submission-files')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw new Error(error.message);
      const { data: urlData } = supabase.storage.from('submission-files').getPublicUrl(fileName);
      urls.push(urlData.publicUrl);
    }
    // Ignore other file types
  }
  return urls;
}

const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    timeframe: z.string({ required_error: "Please select a timeframe" }),
    demoType: z.string({ required_error: "Please select a demo type" }),
    otherDemoType: z.string().optional(),
    streetAddress: z.string().min(1, { message: "Street address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zipCode: z.string().min(5, { message: "Valid zip code is required" }),
    squareFootage: z.string().optional(),
    projectDescription: z.string().optional(),
    wantsCashOffer: z.boolean().optional(),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    companyName: z.string().optional(),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    consent: z.boolean().refine((val) => val === true, {
      message: "You must agree to be contacted to proceed",
    }),
  })
  .refine(
    (data) => {
      if (data.demoType === "Other Demolition" && !data.otherDemoType?.trim()) {
        return false
      }
      return true
    },
    {
      message: "Please specify the type of demolition",
      path: ["otherDemoType"],
    },
  )

type FormValues = z.infer<typeof formSchema>

interface AIEstimate {
  estimate: string
  success: boolean
}

// FIX: Corrected type definition to match the flat structure of Geoapify's Autocomplete API response.
interface AddressSuggestion {
  address_line1: string
  address_line2: string
  city: string
  state: string
  postcode: string
  formatted: string
}

const demoTypes = [
  "Brick and Chimney Removal",
  "Concrete and Asphalt Removal",
  "Deck, Shed, or Fence Removal",
  "Interior Demolition",
  "Structure Removal - Small or Large",
  "Swimming Pool Removal",
  "Tree Removal",
  "Other Demolition",
]

const timeframeOptions = ["ASAP", "Next Week", "Next Month", "Uncertain"]

const squareFootageApplicableTypes = [
  "Concrete and Asphalt Removal",
  "Interior Demolition",
  "Structure Removal - Small or Large",
]

export function CustomQuoteForm() {
  const [currentPage, setCurrentPage] = useState(1)
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pageValidated, setPageValidated] = useState<Record<number, boolean>>({})
  const [aiEstimate, setAiEstimate] = useState<AIEstimate | null>(null)
  const [isLoadingEstimate, setIsLoadingEstimate] = useState(false)
  const [isSavedToDatabase, setIsSavedToDatabase] = useState(false)
  const [isUploadingFiles, setIsUploadingFiles] = useState(false)

  // Autocomplete state
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false)
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const [addressSelected, setAddressSelected] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      timeframe: "",
      demoType: "",
      otherDemoType: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      squareFootage: "",
      projectDescription: "",
      wantsCashOffer: false,
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      consent: false,
    },
  })

  const streetAddressValue = useWatch({
    control: form.control,
    name: "streetAddress",
  })
  const debouncedStreetAddress = useDebounce(streetAddressValue, 300)

  const fetchSuggestions = useCallback(
    async (text: string) => {
      if (text.length < 3 || addressSelected) {
        setSuggestions([])
        setIsSuggestionsVisible(false)
        return
      }
      setIsSuggestionsLoading(true)
      try {
        const response = await fetch(`/api/autocomplete?text=${encodeURIComponent(text)}`)
        const data = await response.json()
        if (response.ok) {
          // FIX: Filter based on the correct flat structure. A suggestion is valid if it's an object with a `formatted` string.
          const validSuggestions = Array.isArray(data)
            ? data.filter((s): s is AddressSuggestion => s && typeof s.formatted === "string")
            : []
          setSuggestions(validSuggestions)
          if (validSuggestions.length > 0) {
            setIsSuggestionsVisible(true)
          }
        } else {
          console.error("API error fetching suggestions:", data.error)
          setSuggestions([])
          setIsSuggestionsVisible(false)
        }
      } catch (error) {
        console.error("Failed to fetch address suggestions:", error)
        setSuggestions([])
        setIsSuggestionsVisible(false)
      } finally {
        setIsSuggestionsLoading(false)
      }
    },
    [addressSelected],
  ) // Depend on addressSelected to avoid fetching after selection

  useEffect(() => {
    fetchSuggestions(debouncedStreetAddress)
  }, [debouncedStreetAddress, fetchSuggestions])

  const handleSuggestionClick = (suggestion: AddressSuggestion) => {
    // FIX: Destructure properties directly from the suggestion object.
    const { address_line1, city, state, postcode } = suggestion
    if (!address_line1) {
      console.error("Invalid suggestion selected:", suggestion)
      setIsSuggestionsVisible(false)
      return
    }

    form.setValue("streetAddress", address_line1, { shouldValidate: true })
    form.setValue("city", city || "", { shouldValidate: true })
    form.setValue("state", state || "", { shouldValidate: true })
    form.setValue("zipCode", postcode || "", { shouldValidate: true })

    setSuggestions([])
    setAddressSelected(true)
    setIsSuggestionsVisible(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setIsSuggestionsVisible(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  async function getAIEstimate(formData: FormValues) {
    setIsLoadingEstimate(true)
    setCurrentPage(5)

    try {
      // For AI estimate, we'll just send file names since the AI doesn't need the actual files
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          files: files.map((f) => f.name),
        }),
      })

      const data = await response.json()

      if (data.success) {
        setAiEstimate(data)
      } else {
        setAiEstimate({
          estimate: "Contact for estimate",
          success: false,
        })
      }
    } catch (error) {
      console.error("Error getting estimate:", error)
      setAiEstimate({
        estimate: "Contact for estimate",
        success: false,
      })
    } finally {
      setIsLoadingEstimate(false)
    }
  }

  async function saveToDatabase(formData: FormValues, estimate: string) {
    if (isSavedToDatabase) return;

    let fileUrls: string[] = [];
    try {
      if (files.length > 0) {
        setIsUploadingFiles(true);
        fileUrls = await uploadFilesDirect(files);
        setIsUploadingFiles(false);
      }

      // Now save the submission with file URLs
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          files: fileUrls,
          aiEstimate: estimate,
          wantsCashOffer: formData.wantsCashOffer,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSavedToDatabase(true);
        console.log("Submission saved to database:", data.submission.id);
      } else {
        alert("Failed to save submission: " + data.error);
      }
    } catch (error) {
      setIsUploadingFiles(false);
      alert("File upload failed: " + (error as Error).message);
      console.error("Error saving to database:", error);
      return;
    }
  }

  useEffect(() => {
    if (currentPage === 5 && !isLoadingEstimate && aiEstimate) {
      const timer = setTimeout(() => {
        setCurrentPage(6)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentPage, isLoadingEstimate, aiEstimate])

  useEffect(() => {
    if (currentPage === 6 && aiEstimate && !isSavedToDatabase) {
      const formData = form.getValues()
      saveToDatabase(formData, aiEstimate.estimate)
    }
  }, [currentPage, aiEstimate, isSavedToDatabase, form])

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setCurrentPage(7)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const nextPage = async () => {
    setPageValidated((prev) => ({ ...prev, [currentPage]: true }))

    let canProceed = false

    if (currentPage === 1) {
      canProceed = await form.trigger(["email", "timeframe"])
    } else if (currentPage === 2) {
      canProceed = await form.trigger(["demoType", "streetAddress", "city", "state", "zipCode", "otherDemoType"])
    } else if (currentPage === 3) {
      canProceed = true
    } else if (currentPage === 4) {
      const result = await form.trigger(["firstName", "lastName", "phone", "consent"])
      if (result) {
        const formData = form.getValues()
        await getAIEstimate(formData)
        return
      }
    }

    if (canProceed) {
      setCurrentPage((prev) => Math.min(prev + 1, 7))
    }
  }

  const prevPage = () => {
    if (currentPage === 5 || currentPage === 6) {
      setCurrentPage(4)
    } else {
      setCurrentPage((prev) => Math.max(prev - 1, 1))
    }
  }

  const shouldShowError = (fieldName: keyof FormValues) => {
    const pageMap: Record<keyof FormValues, number> = {
      email: 1,
      timeframe: 1,
      demoType: 2,
      otherDemoType: 2,
      streetAddress: 2,
      city: 2,
      state: 2,
      zipCode: 2,
      squareFootage: 2,
      projectDescription: 3,
      wantsCashOffer: 3,
      firstName: 4,
      lastName: 4,
      companyName: 4,
      phone: 4,
      consent: 4,
    }

    return pageValidated[pageMap[fieldName]]
  }

  const pageInfo = [
    { title: "Get a Quote", icon: <Mail className="h-5 w-5" /> },
    { title: "Job Information", icon: <Building className="h-5 w-5" /> },
    { title: "Project Details", icon: <FileText className="h-5 w-5" /> },
    { title: "Your Contact Information", icon: <User className="h-5 w-5" /> },
  ]

  const shouldShowSquareFootage = squareFootageApplicableTypes.includes(form.watch("demoType"))

  if (isSubmitted && currentPage === 7) {
    return (
      <div className="bg-white rounded-xl border shadow-lg overflow-hidden max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
          <p className="text-green-100">Your quote request has been submitted successfully.</p>
        </div>
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                1
              </div>
              <p className="text-gray-600">We'll review your project details within 24 hours</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                2
              </div>
              <p className="text-gray-600">Our team will contact you to discuss your project</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                3
              </div>
              <p className="text-gray-600">We'll provide you with a detailed, free quote</p>
            </div>
          </div>
          <Button
            onClick={() => {
              setCurrentPage(1)
              setIsSubmitted(false)
              form.reset()
              setFiles([])
              setPageValidated({})
              setAiEstimate(null)
              setIsSavedToDatabase(false)
              setAddressSelected(false)
            }}
            className="mt-8 bg-primary hover:bg-primary/90 text-black"
          >
            Submit Another Quote
          </Button>
        </div>
      </div>
    )
  }

  if (currentPage === 5) {
    return (
      <div className="bg-white rounded-xl border shadow-lg overflow-hidden max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-black">
          <h2 className="text-2xl font-bold">Generating Your Estimate</h2>
          <p className="text-black/80 mt-1">Our AI is analyzing your project details...</p>
        </div>

        <div className="p-12 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-primary/20 rounded-full"></div>
            </div>
            <div className="relative flex items-center justify-center">
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
              <Sparkles className="h-8 w-8 text-primary/60 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Calculating Your Estimate...</h3>
          <p className="text-gray-600 mb-6">
            We're analyzing your project details, location, timeline, and current market rates to provide you with an
            accurate estimate.
          </p>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 6 && aiEstimate) {
    return (
      <div className="bg-white rounded-xl border shadow-lg overflow-hidden max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-black">
          <h2 className="text-2xl font-bold">Your Estimate</h2>
          <p className="text-black/80 mt-1">Here's your preliminary estimate based on the information provided</p>
        </div>

        <div className="p-8">
          <Card className="border-primary/20 bg-primary/5 mb-6">
            <CardContent className="p-8 text-center">
              <DollarSign className="h-20 w-20 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preliminary Estimate</h3>
              <div className="text-5xl font-bold text-primary mb-4">{aiEstimate.estimate}</div>
              <p className="text-sm text-gray-600">*This is a preliminary estimate based on the information provided</p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3">Important Note</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              This estimate is generated by AI based on typical project costs and the information you provided. Your
              final quote may vary based on site conditions, local regulations, and other factors that require an
              in-person assessment. Our team will provide a detailed, accurate quote after reviewing your project.
            </p>
          </div>

          {isSavedToDatabase && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-green-800">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Your quote request has been saved to our system</span>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={prevPage}
              className="border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Edit
            </Button>

            <Button
              onClick={() => form.handleSubmit(onSubmit)()}
              className="bg-primary hover:bg-primary/90 text-black transition-all duration-300"
            >
              Submit Quote Request
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border shadow-lg overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-black">
        <h2 className="text-2xl font-bold">{pageInfo[currentPage - 1]?.title || "Get a Quote"}</h2>
        <p className="text-black/80 mt-1">
          {currentPage === 1 && "Fill out the form below and we'll get back to you within 24 hours"}
          {currentPage === 2 && "Tell us about your demolition project"}
          {currentPage === 3 && "Help us understand your project better"}
          {currentPage === 4 && "We'll use this information to contact you about your quote"}
        </p>
      </div>

      {currentPage <= 4 && (
        <div className="px-6 pt-6 pb-2">
          <div className="flex justify-between mb-2">
            {pageInfo.map((info, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center transition-all duration-300",
                  currentPage === index + 1 ? "scale-110" : "opacity-70",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-medium transition-all duration-300",
                    currentPage > index + 1
                      ? "bg-green-500 text-white"
                      : currentPage === index + 1
                        ? "bg-primary text-black ring-4 ring-primary/20"
                        : "bg-gray-100 text-gray-500",
                  )}
                >
                  {currentPage > index + 1 ? <Check className="h-5 w-5" /> : info.icon}
                </div>
                <span
                  className={cn(
                    "text-xs text-center hidden sm:block font-medium",
                    currentPage === index + 1 ? "text-primary" : "text-gray-500",
                  )}
                >
                  {info.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2 mb-4">
            <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full rounded-full" />
            <div
              className="absolute top-0 left-0 h-2 bg-primary rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentPage - 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 pt-2 space-y-6">
          {currentPage === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-semibold mb-4">Start With your Email</h3>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {shouldShowError("email") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">When Do You Need This Done?</h3>
                <FormField
                  control={form.control}
                  name="timeframe"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-4"
                        >
                          {timeframeOptions.map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} className="text-primary" />
                              </FormControl>
                              <FormLabel className="font-medium cursor-pointer">{option}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      {shouldShowError("timeframe") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-semibold mb-4">What Type of Demo?</h3>
                <FormField
                  control={form.control}
                  name="demoType"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                            <SelectValue placeholder="Select demo type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {demoTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {shouldShowError("demoType") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              {form.watch("demoType") === "Other Demolition" && (
                <div>
                  <FormField
                    control={form.control}
                    name="otherDemoType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Please specify the type of demolition</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Describe the type of demolition needed..."
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        {shouldShowError("otherDemoType") && <FormMessage />}
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {shouldShowSquareFootage && (
                <div>
                  <FormField
                    control={form.control}
                    name="squareFootage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Approximate Square Footage (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 1,200 sq ft"
                            {...field}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <p className="text-sm text-gray-500 mt-1">
                          Providing square footage helps us give you a more accurate estimate
                        </p>
                        {shouldShowError("squareFootage") && <FormMessage />}
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-4">Project Location</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel className="text-gray-700">Street Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Start typing your address..."
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              setAddressSelected(false)
                            }}
                            autoComplete="off"
                            onFocus={() => {
                              if (!addressSelected) {
                                setIsSuggestionsVisible(true)
                              }
                            }}
                            className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        {shouldShowError("streetAddress") && <FormMessage />}
                        {isSuggestionsVisible && (
                          <div
                            ref={suggestionsRef}
                            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
                          >
                            {isSuggestionsLoading ? (
                              <div className="p-3 text-center text-sm text-gray-500">Loading...</div>
                            ) : suggestions.length > 0 ? (
                              <ul>
                                {suggestions.map((suggestion, index) => (
                                  <li
                                    key={index}
                                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                  >
                                    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                    {/* FIX: Access `formatted` directly from the suggestion object. */}
                                    <span className="text-sm text-gray-700">{suggestion.formatted}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : debouncedStreetAddress.length > 2 && !isSuggestionsLoading ? (
                              <div className="p-3 text-center text-sm text-gray-500">No suggestions found.</div>
                            ) : null}
                          </div>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">City</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tampa"
                              {...field}
                              className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                            />
                          </FormControl>
                          {shouldShowError("city") && <FormMessage />}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">State</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="FL"
                              {...field}
                              className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                            />
                          </FormControl>
                          {shouldShowError("state") && <FormMessage />}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Zip Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="33601"
                              {...field}
                              className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                            />
                          </FormControl>
                          {shouldShowError("zipCode") && <FormMessage />}
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-semibold mb-4">Project Description</h3>
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your project in detail..."
                          className="min-h-[120px] border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      {shouldShowError("projectDescription") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Upload Photos or Plans</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300">
                  <Input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.pdf"
                    disabled={isUploadingFiles}
                  />
                  <label htmlFor="file-upload" className={`flex flex-col items-center justify-center ${isUploadingFiles ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                    <Upload className="h-8 w-8 text-primary/60 mb-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {isUploadingFiles ? 'Uploading files...' : 'Click to choose a file or drag here'}
                    </span>
                    {isUploadingFiles && <div className="mt-2 text-xs text-blue-600">Uploading, please wait...</div>}
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">Selected Files:</p>
                    <ul className="text-sm space-y-1 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-2">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
                          <span className="truncate text-gray-700">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Interested in a Cash Offer?</h3>
                <FormField
                  control={form.control}
                  name="wantsCashOffer"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-medium cursor-pointer">
                          Want a cash offer for this property so you don't have to deal with it?
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Check this box if you're interested in a quick, hassle-free sale of your property as-is.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {shouldShowError("firstName") && <FormMessage />}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {shouldShowError("lastName") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Company Name (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company Name"
                        {...field}
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    {shouldShowError("companyName") && <FormMessage />}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (813) 555-1234"
                        {...field}
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    {shouldShowError("phone") && <FormMessage />}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-700 leading-relaxed">
                        I confirm the contact information I've provided is accurate and my own. I agree to be contacted
                        by phone, text, or email, including with automated technology, for informational and promotional
                        purposes. I understand this consent is not required to make a purchase.
                      </FormLabel>
                      {shouldShowError("consent") && <FormMessage />}
                    </div>
                  </FormItem>
                )}
              />
            </div>
          )}

          {currentPage <= 4 && (
            <div className="flex justify-between pt-6 border-t mt-8">
              {currentPage > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevPage}
                  className="border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 bg-transparent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
              ) : (
                <div></div>
              )}

              {currentPage < 4 ? (
                <Button
                  type="button"
                  onClick={nextPage}
                  className="bg-primary hover:bg-primary/90 text-black transition-all duration-300 flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={nextPage}
                  className="bg-primary hover:bg-primary/90 text-black transition-all duration-300 flex items-center gap-2"
                >
                  Get Estimate
                  <Sparkles className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}
