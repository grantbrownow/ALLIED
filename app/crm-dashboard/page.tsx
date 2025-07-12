"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { AlertCircle, ChevronRight, ExternalLink, RefreshCw, Search, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Submission {
  id: string
  "Submitted at": string
  "Email Address": string
  "When Do You Need This Done?": string
  "What Type of Demo?": string
  "Project Location": string
  "Project Description": string
  "First Name": string
  "Last Name": string
  "Upload Photos or Plans": string
  "Company Name (optional)": string
  "Phone Number": string
  "AI Estimate"?: string
  "Square Footage"?: string
  status?: string
  "Wants Cash Offer"?: boolean
}

export default function CRMDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  async function fetchSubmissions() {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch("/api/submissions")
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to fetch submissions: ${response.status}`)
      }

      const data = await response.json()
      setSubmissions(data.submissions)
    } catch (err: any) {
      setError(err.message || "Error loading submissions. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await fetchSubmissions()
  }

  function getTimelineColor(timeline = "") {
    if (!timeline) return "bg-gray-100 text-gray-800"
    if (timeline.toLowerCase().includes("asap") || timeline.toLowerCase().includes("1-2 weeks")) {
      return "bg-red-100 text-red-800"
    } else if (timeline.toLowerCase().includes("1 month")) {
      return "bg-yellow-100 text-yellow-800"
    } else {
      return "bg-green-100 text-green-800"
    }
  }

  function getStatusBadgeClass(status = "new") {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "contacted":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "quoted":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "won":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "lost":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  function formatDate(dateString: string) {
    try {
      const date = new Date(dateString)
      return `${date.toLocaleDateString()} (${formatDistanceToNow(date, { addSuffix: true })})`
    } catch (e) {
      return dateString
    }
  }

  function getFullName(submission: Submission) {
    const firstName = submission["First Name"] || ""
    const lastName = submission["Last Name"] || ""
    return `${firstName} ${lastName}`.trim() || "N/A"
  }

  function formatFileLinks(fileUrls: string) {
    if (!fileUrls) return "None"
    const urls = fileUrls.split(", ")
    if (urls.length === 0) return "None"
    return (
      <div className="flex flex-wrap gap-2">
        {urls.map((url, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            File {index + 1}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    )
  }

  const filteredSubmissions = submissions.filter((submission) => {
    const searchString = searchTerm.toLowerCase()
    const wantsCashOffer = submission["Wants Cash Offer"] ? "cash offer" : ""

    return (
      getFullName(submission).toLowerCase().includes(searchString) ||
      (submission["Email Address"] || "").toLowerCase().includes(searchString) ||
      (submission["Phone Number"] || "").toLowerCase().includes(searchString) ||
      (submission["What Type of Demo?"] || "").toLowerCase().includes(searchString) ||
      (submission["Project Location"] || "").toLowerCase().includes(searchString) ||
      (submission.status || "new").toLowerCase().includes(searchString) ||
      wantsCashOffer.includes(searchString)
    )
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">CRM Dashboard</h1>
              <p className="text-muted-foreground">View and manage all form submissions</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing || isLoading}
              className="flex items-center gap-2 self-start bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800">Error loading submissions</h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle>Recent Quote Requests</CardTitle>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search submissions..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-pulse text-center">
                    <div className="h-4 w-32 bg-gray-200 rounded mb-4 mx-auto"></div>
                    <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              ) : submissions.length === 0 && !error ? (
                <div className="text-center py-8 text-muted-foreground">No submissions found</div>
              ) : (
                <div>
                  <div className="hidden md:block overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Demo Type</TableHead>
                          <TableHead>Timeline</TableHead>
                          <TableHead>Cash Offer</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>{formatDate(submission["Submitted at"])}</TableCell>
                            <TableCell>{getFullName(submission)}</TableCell>
                            <TableCell>
                              <Badge className={`${getStatusBadgeClass(submission.status)} capitalize`}>
                                {submission.status || "New"}
                              </Badge>
                            </TableCell>
                            <TableCell>{submission["What Type of Demo?"] || "N/A"}</TableCell>
                            <TableCell>
                              {submission["When Do You Need This Done?"] ? (
                                <Badge className={getTimelineColor(submission["When Do You Need This Done?"])}>
                                  {submission["When Do You Need This Done?"]}
                                </Badge>
                              ) : (
                                <span className="text-gray-500">Not specified</span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {submission["Wants Cash Offer"] && (
                                <Badge variant="outline" className="border-yellow-400 bg-yellow-50 text-yellow-700">
                                  <DollarSign className="h-4 w-4" />
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => (window.location.href = `/crm-dashboard/${submission.id}`)}
                              >
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="md:hidden space-y-4">
                    {filteredSubmissions.map((submission) => (
                      <Card key={submission.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="p-4 border-b">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">{getFullName(submission)}</h3>
                              <div className="flex items-center gap-2">
                                {submission["Wants Cash Offer"] && (
                                  <Badge variant="outline" className="border-yellow-400 bg-yellow-50 text-yellow-700">
                                    <DollarSign className="h-4 w-4" />
                                  </Badge>
                                )}
                                {submission["When Do You Need This Done?"] && (
                                  <Badge className={getTimelineColor(submission["When Do You Need This Done?"])}>
                                    {submission["When Do You Need This Done?"]}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {formatDate(submission["Submitted at"])}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Demo Type:</span>{" "}
                              {submission["What Type of Demo?"] || "N/A"}
                            </p>
                          </div>
                          <div className="p-4 bg-gray-50 flex items-center justify-between">
                            <Badge className={`${getStatusBadgeClass(submission.status)} capitalize`}>
                              {submission.status || "New"}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => (window.location.href = `/crm-dashboard/${submission.id}`)}
                            >
                              View Details
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
