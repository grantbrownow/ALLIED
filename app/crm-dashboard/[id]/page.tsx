"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, ExternalLink, MapPin, Phone, DollarSign, CheckCircle, MessageSquare } from "lucide-react"

interface Submission {
  id: string
  status?: string
  notes?: string
  contacted_at?: string
  contacted_by?: string
  "Wants Cash Offer"?: boolean
  [key: string]: any
}

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
  const [submission, setSubmission] = useState<Submission | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [noteText, setNoteText] = useState("")
  const router = useRouter()

  useEffect(() => {
    async function fetchSubmission() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/submissions")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (!data.success) {
          throw new Error(data.error || "Failed to fetch submissions")
        }

        const foundSubmission = data.submissions?.find((sub: Submission) => sub.id === params.id)

        if (!foundSubmission) {
          throw new Error("Submission not found")
        }

        setSubmission(foundSubmission)
      } catch (err: any) {
        console.error("Error fetching submission:", err)
        setError(err.message || "Error loading submission. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchSubmission()
    }
  }, [params.id])

  const handleUpdateSubmission = async (updateData: Partial<Submission>) => {
    if (!submission) return false

    setIsUpdating(true)
    try {
      const response = await fetch("/api/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
          ...updateData,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || "Update failed")
      }

      // Update the submission state with the new data
      setSubmission((prev) => (prev ? { ...prev, ...result.submission } : null))
      return true
    } catch (error: any) {
      console.error("Failed to update submission:", error)
      setError(`Update failed: ${error.message}`)
      return false
    } finally {
      setIsUpdating(false)
    }
  }

  const handleMarkAsContacted = async () => {
    const success = await handleUpdateSubmission({ status: "contacted" })
    if (success) {
      setError(null) // Clear any previous errors
    }
  }

  const handleAddNote = async () => {
    if (!noteText.trim() || !submission) return

    const now = new Date()
    const timestamp = now.toLocaleString()
    const noteEntry = `[${timestamp}] CRM User:\n${noteText.trim()}\n\n`
    const updatedNotes = (submission.notes || "") + noteEntry

    const success = await handleUpdateSubmission({ notes: updatedNotes })
    if (success) {
      setNoteText("")
      setError(null) // Clear any previous errors
    }
  }

  function formatDate(dateString: string | undefined | null) {
    if (!dateString) return "N/A"

    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return dateString

      const now = new Date()
      const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

      if (diffInDays === 0) return "Today"
      if (diffInDays === 1) return "Yesterday"
      if (diffInDays < 7) return `${diffInDays} days ago`

      return date.toLocaleDateString()
    } catch (e) {
      console.error("Error formatting date:", e)
      return dateString
    }
  }

  function getTimelineColor(timeline = "") {
    if (!timeline) return "bg-gray-100 text-gray-800"

    const timelineLower = timeline.toLowerCase()
    if (timelineLower.includes("asap") || timelineLower.includes("1-2 weeks")) {
      return "bg-red-100 text-red-800"
    } else if (timelineLower.includes("1 month")) {
      return "bg-yellow-100 text-yellow-800"
    } else {
      return "bg-green-100 text-green-800"
    }
  }

  function formatFileLinks(fileUrls: string | undefined | null) {
    if (!fileUrls || fileUrls === "None") return <span className="text-muted-foreground">None</span>

    try {
      const urls = fileUrls.split(", ").filter((url) => url.trim())
      if (urls.length === 0) return <span className="text-muted-foreground">None</span>

      return (
        <div className="flex flex-wrap gap-2">
          {urls.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
            >
              View File {index + 1}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      )
    } catch (e) {
      console.error("Error formatting file links:", e)
      return <span className="text-muted-foreground">Error loading files</span>
    }
  }

  function getFullName() {
    if (!submission) return "N/A"

    const firstName = submission["First Name"] || ""
    const lastName = submission["Last Name"] || ""
    const fullName = `${firstName} ${lastName}`.trim()

    return fullName || "N/A"
  }

  function getContactActions() {
    if (!submission) return null

    const phoneNumber = submission["Phone Number"]
    const emailAddress = submission["Email Address"]
    const firstName = submission["First Name"] || "there"
    const demoType = submission["What Type of Demo?"] || "demolition"
    const projectLocation = submission["Project Location"] || "your area"
    const aiEstimate = submission["AI Estimate"]

    return (
      <div className="grid grid-cols-1 gap-2">
        {phoneNumber && (
          <>
            <Button
              className="w-full flex items-center gap-2"
              onClick={() => window.open(`tel:${phoneNumber}`, "_self")}
            >
              <Phone className="h-4 w-4" />
              Call Lead
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-transparent"
              onClick={() => {
                const message = `Hi ${firstName}, this is Allied Wrecking regarding your demolition project quote request. When would be a good time to discuss your project?`
                window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, "_self")
              }}
            >
              <MessageSquare className="h-4 w-4" />
              Text Lead
            </Button>
          </>
        )}
        {emailAddress && (
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 bg-transparent"
            onClick={() => {
              const subject = encodeURIComponent(`Re: Your ${demoType} Project Quote`)
              const body = encodeURIComponent(`Hi ${firstName},

Thank you for reaching out to Allied Wrecking regarding your ${demoType} project in ${projectLocation}.

We've reviewed your request and would like to discuss your project in more detail. Based on the information you provided, we can provide you with a comprehensive quote for your ${demoType} needs.

${aiEstimate ? `Our preliminary AI estimate suggests a range around ${aiEstimate}, but we'd like to schedule a site visit to provide you with an accurate quote.` : "We'd like to schedule a site visit to provide you with an accurate quote."}

When would be a convenient time for us to visit the site and discuss your project requirements?

Best regards,
Allied Wrecking Team`)

              window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, "_self")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Lead
          </Button>
        )}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center py-8">
              <div className="animate-pulse text-center">
                <div className="h-4 w-32 bg-gray-200 rounded mb-4 mx-auto"></div>
                <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <Button
              variant="ghost"
              className="mb-6 flex items-center gap-2"
              onClick={() => router.push("/crm-dashboard")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">{error}</div>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!submission) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <Button
              variant="ghost"
              className="mb-6 flex items-center gap-2"
              onClick={() => router.push("/crm-dashboard")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="text-center py-8 text-muted-foreground">Submission not found</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <Button
            variant="ghost"
            className="mb-6 flex items-center gap-2"
            onClick={() => router.push("/crm-dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Left column - Customer info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{getFullName()}</h3>
                    <p className="text-muted-foreground">{submission["Company Name (optional)"] || "Individual"}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p>{submission["Phone Number"] || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mt-1 text-muted-foreground"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <p>{submission["Email Address"] || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Project Location</p>
                        <p>{submission["Project Location"] || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Submitted</p>
                        <p>{formatDate(submission["Submitted at"])}</p>
                      </div>
                    </div>

                    {submission["AI Estimate"] && (
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-1 text-muted-foreground" />
                        <div>
                          <p className="font-medium">AI Estimate</p>
                          <Badge className="bg-green-100 text-green-800">{submission["AI Estimate"]}</Badge>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {getContactActions()}

                  <div className="border-t pt-4 space-y-2">
                    <h4 className="font-medium text-sm text-muted-foreground">Project Management</h4>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => router.push(`/crm-dashboard/${params.id}/create-invoice`)}
                    >
                      Create Invoice
                    </Button>
                    {submission.status === "contacted" && submission.contacted_at ? (
                      <div className="text-sm text-center text-green-700 bg-green-50 p-2 rounded-md flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Contacted on {formatDate(submission.contacted_at)}</span>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={handleMarkAsContacted}
                        disabled={isUpdating}
                      >
                        {isUpdating ? "Updating..." : "Mark as Contacted"}
                      </Button>
                    )}
                    <Button variant="outline" className="w-full bg-transparent">
                      Schedule Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Project details */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>Submitted {formatDate(submission["Submitted at"])}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Project Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {submission["What Type of Demo?"]?.split(", ").map((type: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {type}
                        </Badge>
                      )) || <span className="text-muted-foreground">Not specified</span>}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Timeline</h3>
                    <Badge className={getTimelineColor(submission["When Do You Need This Done?"])}>
                      {submission["When Do You Need This Done?"] || "Not specified"}
                    </Badge>
                  </div>

                  {submission["Square Footage"] && (
                    <div>
                      <h3 className="font-semibold mb-1">Square Footage</h3>
                      <p className="text-sm bg-gray-50 p-2 rounded">{submission["Square Footage"]}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold mb-1">Project Description</h3>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <p className="whitespace-pre-wrap">
                        {submission["Project Description"] || "No description provided."}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Uploaded Files</h3>
                    <div className="p-4 bg-gray-50 rounded-md">
                      {formatFileLinks(submission["Upload Photos or Plans"])}
                    </div>
                  </div>

                  {submission["Wants Cash Offer"] && (
                    <div>
                      <h3 className="font-semibold mb-1">Cash Offer Interest</h3>
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-center gap-3">
                        <DollarSign className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-yellow-900">
                            This client is interested in a cash offer for their property.
                          </p>
                          <p className="text-sm text-yellow-800">Prioritize follow-up for this high-value lead.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notes & Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md border h-48 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                      {submission.notes || "No notes yet."}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Add a new note..."
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      className="bg-transparent"
                    />
                    <Button onClick={handleAddNote} disabled={isUpdating || !noteText.trim()}>
                      {isUpdating ? "Saving Note..." : "Add Note"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
