"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Check, Upload, ArrowRight, Clock, MapPin, Building, Mail, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  timeframe: z.string({ required_error: "Please select a timeframe" }),
  demoType: z.string({ required_error: "Please select a demo type" }),
  street: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  zipcode: z.string().min(5, { message: "Valid zipcode is required" }),
  details: z.string().optional(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  companyName: z.string().optional(),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
})

type FormValues = z.infer<typeof formSchema>

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

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [files, setFiles] = useState<File[]>([])
  // Track validation state for each step
  const [stepValidated, setStepValidated] = useState<Record<number, boolean>>({})
  // Track if final submit was attempted
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      timeframe: "",
      demoType: "",
      street: "",
      city: "",
      zipcode: "",
      details: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
    },
  })

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data)
    // Here you would typically send the data to your backend/CRM
    alert("Thank you for your submission! We will contact you shortly.")
    form.reset()
    setStep(1)
    setFiles([])
    setStepValidated({})
    setSubmitAttempted(false)
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

  const nextStep = async () => {
    // Mark current step as validated
    setStepValidated((prev) => ({ ...prev, [step]: true }))

    let canProceed = false

    if (step === 1) {
      const result = await form.trigger(["email", "timeframe"])
      canProceed = result
    } else if (step === 2) {
      const result = await form.trigger(["demoType"])
      canProceed = result
    } else if (step === 3) {
      const result = await form.trigger(["street", "city", "zipcode"])
      canProceed = result
    } else if (step === 4) {
      // Details step is optional
      canProceed = true
    }

    if (canProceed) {
      setStep((prev) => Math.min(prev + 1, 5))
    }
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleFinalSubmit = async () => {
    setSubmitAttempted(true)
    const isValid = await form.trigger(["firstName", "lastName", "phone"])
    if (isValid) {
      form.handleSubmit(onSubmit)()
    }
  }

  // Helper function to determine if errors should be shown
  const shouldShowError = (fieldName: keyof FormValues) => {
    // For step 5 fields, only show errors if submit was attempted
    if (["firstName", "lastName", "phone"].includes(fieldName) && step === 5) {
      return submitAttempted
    }

    // For other steps, show errors if that step was validated
    const stepMap: Record<keyof FormValues, number> = {
      email: 1,
      timeframe: 1,
      demoType: 2,
      street: 3,
      city: 3,
      zipcode: 3,
      details: 4,
      firstName: 5,
      lastName: 5,
      companyName: 5,
      phone: 5,
    }

    return stepValidated[stepMap[fieldName]]
  }

  // Step titles and icons
  const stepInfo = [
    { title: "Start Here", icon: <Mail className="h-5 w-5" /> },
    { title: "Demo Type", icon: <Building className="h-5 w-5" /> },
    { title: "Address", icon: <MapPin className="h-5 w-5" /> },
    { title: "Details", icon: <Clock className="h-5 w-5" /> },
    { title: "Contact Info", icon: <User className="h-5 w-5" /> },
  ]

  return (
    <div className="bg-white rounded-xl border shadow-lg overflow-hidden transition-all duration-300">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-white">
        <h2 className="text-2xl font-bold">Request a Free Quote</h2>
        <p className="text-white/80 mt-1">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex justify-between mb-2">
          {stepInfo.map((info, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center transition-all duration-300",
                step === index + 1 ? "scale-110" : "opacity-70",
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-medium transition-all duration-300",
                  step > index + 1
                    ? "bg-green-500 text-white"
                    : step === index + 1
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : "bg-gray-100 text-gray-500",
                )}
              >
                {step > index + 1 ? <Check className="h-5 w-5" /> : info.icon}
              </div>
              <span
                className={cn(
                  "text-xs text-center hidden sm:block font-medium",
                  step === index + 1 ? "text-primary" : "text-gray-500",
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
            style={{ width: `${(step - 1) * 25}%` }}
          />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 pt-2 space-y-6">
          {/* Step 1: Email and Timeframe */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium flex items-center gap-2 text-gray-800">
                <Mail className="h-5 w-5 text-primary" />
                Start with Your Email
              </h3>
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
              <FormField
                control={form.control}
                name="timeframe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">When Do You Need This Done?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-3 pt-2"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="ASAP" className="text-primary" />
                          </FormControl>
                          <FormLabel className="font-medium cursor-pointer">A.S.A.P.</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Next Week" className="text-primary" />
                          </FormControl>
                          <FormLabel className="font-medium cursor-pointer">Next Week</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Next Month" className="text-primary" />
                          </FormControl>
                          <FormLabel className="font-medium cursor-pointer">Next Month</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Uncertain" className="text-primary" />
                          </FormControl>
                          <FormLabel className="font-medium cursor-pointer">Uncertain</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    {shouldShowError("timeframe") && <FormMessage />}
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Step 2: Demo Type */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium flex items-center gap-2 text-gray-800">
                <Building className="h-5 w-5 text-primary" />
                What Type of Demolition?
              </h3>
              <p className="text-sm text-gray-500">Select the option that best describes your project needs</p>
              <FormField
                control={form.control}
                name="demoType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Demolition Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Select a demo type" />
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
          )}

          {/* Step 3: Address */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium flex items-center gap-2 text-gray-800">
                <MapPin className="h-5 w-5 text-primary" />
                Project Location
              </h3>
              <p className="text-sm text-gray-500">Where is the demolition project located?</p>
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Street Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main St"
                        {...field}
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    {shouldShowError("street") && <FormMessage />}
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
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
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Zipcode</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="33601"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {shouldShowError("zipcode") && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium flex items-center gap-2 text-gray-800">
                <Clock className="h-5 w-5 text-primary" />
                Project Details
              </h3>
              <p className="text-sm text-gray-500">Help us understand your project better</p>
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your project in detail..."
                        className="min-h-[120px] border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    {shouldShowError("details") && <FormMessage />}
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <Label htmlFor="file-upload" className="text-gray-700">
                  Upload Photos or Plans
                </Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-primary/50 transition-colors duration-300">
                  <Input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
                    <Upload className="h-8 w-8 text-primary/60 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Choose files to upload</span>
                    <span className="text-xs text-gray-500 mt-1">or drag and drop them here</span>
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
            </div>
          )}

          {/* Step 5: Contact Info */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium flex items-center gap-2 text-gray-800">
                <User className="h-5 w-5 text-primary" />
                Your Contact Information
              </h3>
              <p className="text-sm text-gray-500">We'll use this information to contact you about your quote</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {submitAttempted && <FormMessage />}
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
                          placeholder="Doe"
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        />
                      </FormControl>
                      {submitAttempted && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Company Name (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Acme Inc."
                        {...field}
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    {submitAttempted && <FormMessage />}
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
                        placeholder="(813) 555-1234"
                        {...field}
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    {submitAttempted && <FormMessage />}
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t mt-6">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="border-gray-300 hover:bg-gray-50 transition-all duration-300 bg-transparent"
              >
                Previous Step
              </Button>
            ) : (
              <div></div>
            )}

            {step < 5 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-primary hover:bg-primary/90 transition-all duration-300 gap-1"
              >
                Next Step <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="button"
                className="bg-primary hover:bg-primary/90 transition-all duration-300"
                onClick={handleFinalSubmit}
              >
                Submit Quote Request
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
