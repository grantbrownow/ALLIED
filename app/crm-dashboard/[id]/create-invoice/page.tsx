"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Trash2, Printer, Send, Download, ChevronDown, ChevronUp } from "lucide-react"
import type { Invoice, InvoiceItem, InvoiceFee } from "@/app/types/invoice"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

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
}

export default function CreateInvoicePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [submission, setSubmission] = useState<Submission | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const invoiceRef = useRef<HTMLDivElement>(null)
  const [expandedSections, setExpandedSections] = useState({
    customer: true,
    items: true,
    fees: true,
    notes: true,
  })

  const [invoice, setInvoice] = useState<Invoice>({
    id: uuidv4(),
    customerId: params.id,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
    invoiceNumber: `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    dateCreated: new Date().toISOString().split("T")[0],
    dateDue: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    items: [
      {
        id: uuidv4(),
        description: "",
        quantity: 1,
        unitPrice: 0,
        amount: 0,
      },
    ],
    fees: [],
    notes: "",
    subtotal: 0,
    total: 0,
    status: "draft",
  })

  useEffect(() => {
    async function fetchSubmission() {
      try {
        const response = await fetch("/api/submissions")
        if (!response.ok) throw new Error("Failed to fetch submissions")

        const data = await response.json()
        const found = data.submissions.find((s: Submission) => s.id === params.id)

        if (found) {
          setSubmission(found)

          // Pre-fill invoice with customer information
          setInvoice((prev) => ({
            ...prev,
            customerName: `${found["First Name"] || ""} ${found["Last Name"] || ""}`.trim(),
            customerEmail: found["Email Address"] || "",
            customerPhone: found["Phone Number"] || "",
            customerAddress: found["Project Location"] || "",
            items: [
              {
                id: uuidv4(),
                description: `${found["What Type of Demo?"] || "Demolition"} Services`,
                quantity: 1,
                unitPrice: 0,
                amount: 0,
              },
            ],
          }))
        } else {
          setError("Customer not found")
        }
      } catch (err) {
        setError("Error loading customer data. Please try again later.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmission()
  }, [params.id])

  // Calculate subtotal, fees, and total
  useEffect(() => {
    const subtotal = invoice.items.reduce((sum, item) => sum + item.amount, 0)

    const updatedFees = invoice.fees.map((fee) => {
      if (fee.type === "percentage") {
        return {
          ...fee,
          amount: (subtotal * fee.value) / 100,
        }
      }
      return fee
    })

    const feesTotal = updatedFees.reduce((sum, fee) => sum + fee.amount, 0)
    const total = subtotal + feesTotal

    setInvoice((prev) => ({
      ...prev,
      fees: updatedFees,
      subtotal,
      total,
    }))
  }, [invoice.items, invoice.fees.length])

  // Handle item changes
  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoice((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }

          // Recalculate amount if quantity or unitPrice changes
          if (field === "quantity" || field === "unitPrice") {
            updatedItem.amount = updatedItem.quantity * updatedItem.unitPrice
          }

          return updatedItem
        }
        return item
      })

      return { ...prev, items: updatedItems }
    })
  }

  // Add new item
  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: uuidv4(),
          description: "",
          quantity: 1,
          unitPrice: 0,
          amount: 0,
        },
      ],
    }))
  }

  // Remove item
  const removeItem = (id: string) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }

  // Handle fee changes
  const handleFeeChange = (id: string, field: keyof InvoiceFee, value: string | number) => {
    setInvoice((prev) => {
      const updatedFees = prev.fees.map((fee) => {
        if (fee.id === id) {
          const updatedFee = { ...fee, [field]: value }

          // Recalculate amount if value changes for fixed fee
          if (field === "value" && fee.type === "fixed") {
            updatedFee.amount = Number(value)
          }

          return updatedFee
        }
        return fee
      })

      return { ...prev, fees: updatedFees }
    })
  }

  // Add new fee
  const addFee = (type: "fixed" | "percentage") => {
    setInvoice((prev) => {
      const newFee = {
        id: uuidv4(),
        name: type === "fixed" ? "Additional Fee" : "Tax",
        type,
        value: type === "fixed" ? 0 : 7,
        amount: 0,
      }

      return {
        ...prev,
        fees: [...prev.fees, newFee],
      }
    })
  }

  // Remove fee
  const removeFee = (id: string) => {
    setInvoice((prev) => ({
      ...prev,
      fees: prev.fees.filter((fee) => fee.id !== id),
    }))
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  // Print invoice
  const printInvoice = () => {
    setShowPreview(true)
    setTimeout(() => {
      window.print()
    }, 100)
  }

  // Download invoice as PDF
  const downloadPdf = async () => {
    try {
      setIsGeneratingPdf(true)

      // Store original preview state to restore it later
      const wasInPreviewMode = showPreview

      // If not already in preview mode, switch to it temporarily
      if (!showPreview) {
        setShowPreview(true)
        // Wait for the preview to render
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      if (!invoiceRef.current) {
        console.error("Invoice reference not found")
        return
      }

      // Create canvas from the invoice element
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      })

      // Calculate dimensions
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png")
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

      // Save PDF
      pdf.save(`Invoice_${invoice.invoiceNumber}.pdf`)

      // If user wasn't in preview mode before, switch back to builder
      if (!wasInPreviewMode) {
        setShowPreview(false)
      }
    } catch (err) {
      console.error("Error generating PDF:", err)
      alert("There was an error generating the PDF. Please try again.")
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  // Send invoice via email
  const sendInvoice = async () => {
    try {
      // First, make sure we have the invoice preview rendered
      const wasInPreviewMode = showPreview
      if (!showPreview) {
        setShowPreview(true)
        // Wait for the preview to render
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      if (!invoiceRef.current) {
        console.error("Invoice reference not found")
        return
      }

      // Create HTML email content
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Invoice ${invoice.invoiceNumber}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #e0e0e0;
            }
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #e0e0e0;
              padding-bottom: 20px;
              margin-bottom: 20px;
            }
            .logo {
              display: flex;
              align-items: center;
            }
            .logo-box {
              background-color: #f59e0b;
              width: 50px;
              height: 50px;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: black;
              font-weight: bold;
              font-size: 20px;
              margin-right: 15px;
            }
            .company-name {
              font-size: 24px;
              font-weight: bold;
              margin: 0;
            }
            .company-tagline {
              font-size: 14px;
              color: #666;
              margin: 0;
            }
            .invoice-title {
              text-align: right;
            }
            .invoice-title h2 {
              font-size: 28px;
              margin: 0;
            }
            .invoice-title p {
              color: #666;
              margin: 0;
            }
            .info-section {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .info-section div {
              width: 48%;
            }
            .info-section h3 {
              font-size: 16px;
              color: #666;
              margin-bottom: 5px;
            }
            .dates {
              background-color: #f9fafb;
              padding: 15px;
              border-radius: 6px;
              margin-bottom: 20px;
              display: flex;
            }
            .dates div {
              width: 50%;
            }
            .dates p {
              margin: 0;
            }
            .dates .label {
              font-size: 14px;
              color: #666;
            }
            .dates .value {
              font-weight: 500;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th {
              background-color: #f9fafb;
              text-align: left;
              padding: 10px;
              font-weight: 500;
            }
            td {
              padding: 10px;
              border-bottom: 1px solid #e0e0e0;
            }
            tr:nth-child(even) td {
              background-color: #f9fafb;
            }
            .text-right {
              text-align: right;
            }
            .summary {
              width: 300px;
              margin-left: auto;
              margin-bottom: 20px;
            }
            .summary div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 5px;
            }
            .summary .total {
              font-weight: bold;
              border-top: 1px solid #e0e0e0;
              padding-top: 5px;
              margin-top: 5px;
            }
            .notes {
              border-top: 1px solid #e0e0e0;
              padding-top: 15px;
              margin-bottom: 20px;
            }
            .notes h3 {
              margin-top: 0;
            }
            .payment-instructions {
              background-color: #f9fafb;
              padding: 15px;
              border-radius: 6px;
              margin-bottom: 20px;
            }
            .payment-instructions h3 {
              margin-top: 0;
            }
            .footer {
              text-align: center;
              color: #666;
              font-size: 14px;
              border-top: 1px solid #e0e0e0;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header with Logo and Invoice Title -->
            <div class="header">
              <div class="logo">
                <div style="width: 50px; height: 50px; margin-right: 15px;">
                  <img src="https://your-website-url.com/allied-wrecking-logo.jpeg" alt="ALLIED Wrecking Logo" style="width: 100%; height: 100%; object-fit: contain;" />
                </div>
                <div>
                  <h1 class="company-name">ALLIED Wrecking</h1>
                  <p class="company-tagline">Professional Demolition Services</p>
                </div>
              </div>
              <div class="invoice-title">
                <h2>INVOICE</h2>
                <p>${invoice.invoiceNumber}</p>
              </div>
            </div>
            
            <!-- Company and Customer Info -->
            <div class="info-section">
              <div>
                <h3>From:</h3>
                <p><strong>ALLIED Wrecking</strong><br>
                123 Demolition Way<br>
                Tampa, FL 33601<br>
                kilroydemo@gmail.com<br>
                (813) 555-1234</p>
              </div>
              <div>
                <h3>Bill To:</h3>
                <p><strong>${invoice.customerName}</strong><br>
                ${invoice.customerAddress}<br>
                ${invoice.customerEmail}<br>
                ${invoice.customerPhone}</p>
              </div>
            </div>
            
            <!-- Invoice Dates -->
            <div class="dates">
              <div>
                <p class="label">Invoice Date:</p>
                <p class="value">${invoice.dateCreated}</p>
              </div>
              <div>
                <p class="label">Due Date:</p>
                <p class="value">${invoice.dateDue}</p>
              </div>
            </div>
            
            <!-- Line Items -->
            <h3>Services</h3>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th class="text-right">Qty</th>
                  <th class="text-right">Unit Price</th>
                  <th class="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                ${invoice.items
                  .map(
                    (item, index) => `
                  <tr>
                    <td>${item.description}</td>
                    <td class="text-right">${item.quantity}</td>
                    <td class="text-right">${formatCurrency(item.unitPrice)}</td>
                    <td class="text-right">${formatCurrency(item.amount)}</td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
            
            <!-- Summary -->
            <div class="summary">
              <div>
                <span>Subtotal:</span>
                <span>${formatCurrency(invoice.subtotal)}</span>
              </div>
              
              ${invoice.fees
                .map(
                  (fee) => `
                <div>
                  <span>${fee.name} ${fee.type === "percentage" ? `(${fee.value}%)` : ""}:</span>
                  <span>${formatCurrency(fee.amount)}</span>
                </div>
              `,
                )
                .join("")}
              
              <div class="total">
                <span>Total Due:</span>
                <span>${formatCurrency(invoice.total)}</span>
              </div>
            </div>
            
            ${
              invoice.notes
                ? `
              <!-- Notes -->
              <div class="notes">
                <h3>Notes:</h3>
                <p>${invoice.notes.replace(/\n/g, "<br>")}</p>
              </div>
            `
                : ""
            }
            
            <!-- Payment Instructions -->
            <div class="payment-instructions">
              <h3>Payment Instructions:</h3>
              <p>Please make checks payable to ALLIED Wrecking or contact us for electronic payment options.</p>
            </div>
            
            <!-- Footer -->
            <div class="footer">
              <p>Thank you for your business!</p>
              <p>Questions? Contact us at (813) 555-1234 or kilroydemo@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `

      // Create a plain text fallback for email clients that don't support HTML
      const plainTextBody = `
  Dear ${invoice.customerName},
  
  Please find your invoice ${invoice.invoiceNumber} below.
  
  INVOICE: ${invoice.invoiceNumber}
  DATE: ${invoice.dateCreated}
  DUE DATE: ${invoice.dateDue}
  
  BILL TO:
  ${invoice.customerName}
  ${invoice.customerAddress}
  
  SERVICES:
  ${invoice.items.map((item) => `${item.description}: ${item.quantity} x ${formatCurrency(item.unitPrice)} = ${formatCurrency(item.amount)}`).join("\n")}
  
  SUBTOTAL: ${formatCurrency(invoice.subtotal)}
  ${invoice.fees.map((fee) => `${fee.name} ${fee.type === "percentage" ? `(${fee.value}%)` : ""}: ${formatCurrency(fee.amount)}`).join("\n")}
  TOTAL DUE: ${formatCurrency(invoice.total)}
  
  ${invoice.notes ? `NOTES:\n${invoice.notes}\n\n` : ""}
  
  PAYMENT INSTRUCTIONS:
  Please make checks payable to ALLIED Wrecking or contact us for electronic payment options.
  
  Thank you for your business!
  Questions? Contact us at (813) 555-1234 or kilroydemo@gmail.com
      `

      // Create a Blob with the HTML content
      const blob = new Blob([emailHtml], { type: "text/html" })
      const htmlFile = new File([blob], `invoice-${invoice.invoiceNumber}.html`, { type: "text/html" })

      // Create a mailto URL with the plain text as fallback
      const subject = encodeURIComponent(`Invoice ${invoice.invoiceNumber} from ALLIED Wrecking`)
      const mailtoUrl = `mailto:${invoice.customerEmail}?subject=${subject}&body=${encodeURIComponent(plainTextBody)}`

      // If the browser supports the navigator.share API, use it to share the email content
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [htmlFile] })) {
        try {
          await navigator.share({
            files: [htmlFile],
            title: `Invoice ${invoice.invoiceNumber}`,
            text: plainTextBody,
          })
        } catch (error) {
          console.error("Error sharing:", error)
          // Fallback to mailto
          window.location.href = mailtoUrl
        }
      } else {
        // Fallback to mailto for browsers that don't support navigator.share
        window.location.href = mailtoUrl
      }

      // If user wasn't in preview mode before, switch back
      if (!wasInPreviewMode) {
        setShowPreview(false)
      }
    } catch (err) {
      console.error("Error sending invoice:", err)
      alert("There was an error preparing the email. Please try again.")
    }
  }

  // Toggle preview mode
  const togglePreview = () => {
    setShowPreview(!showPreview)
  }

  // Toggle section expansion (for mobile)
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
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
        <main className="flex-1 py-12">
          <div className="container">
            <div className="text-center py-8 text-red-500">{error}</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Invoice Preview Component - Vertical Format
  const InvoicePreview = () => (
    <div
      ref={invoiceRef}
      className="bg-white p-4 sm:p-8 border rounded-lg shadow-lg max-w-[8.5in] mx-auto print:shadow-none print:border-none print:p-6 print:max-w-none"
    >
      <style jsx global>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0.5in;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      <div className="flex flex-col space-y-6">
        {/* Logo and Title */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 gap-4">
          <div className="flex items-center">
            <div className="w-16 h-16 mr-3">
              <img
                src="/allied-wrecking-logo.jpeg"
                alt="ALLIED Wrecking Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ALLIED Wrecking</h1>
              <p className="text-sm text-muted-foreground">Professional Demolition Services</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <h2 className="text-3xl font-bold text-gray-800">INVOICE</h2>
            <p className="text-muted-foreground">{invoice.invoiceNumber}</p>
          </div>
        </div>

        {/* Company and Customer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-600 mb-1">From:</h3>
            <p className="font-medium">ALLIED Wrecking</p>
            <p>123 Demolition Way</p>
            <p>Tampa, FL 33601</p>
            <p>kilroydemo@gmail.com</p>
            <p>(813) 555-1234</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600 mb-1">Bill To:</h3>
            <p className="font-medium">{invoice.customerName}</p>
            <p className="break-words">{invoice.customerAddress}</p>
            <p className="break-words">{invoice.customerEmail}</p>
            <p>{invoice.customerPhone}</p>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
          <div>
            <p className="text-sm text-gray-500">Invoice Date:</p>
            <p className="font-medium">{invoice.dateCreated}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Due Date:</p>
            <p className="font-medium">{invoice.dateDue}</p>
          </div>
        </div>

        {/* Line Items */}
        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <div className="border rounded-md overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-2 px-3 font-medium">Description</th>
                  <th className="text-right py-2 px-3 font-medium">Qty</th>
                  <th className="text-right py-2 px-3 font-medium">Unit Price</th>
                  <th className="text-right py-2 px-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-3">{item.description}</td>
                    <td className="py-3 px-3 text-right">{item.quantity}</td>
                    <td className="py-3 px-3 text-right">{formatCurrency(item.unitPrice)}</td>
                    <td className="py-3 px-3 text-right">{formatCurrency(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="flex justify-end">
          <div className="w-full sm:w-64">
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span>{formatCurrency(invoice.subtotal)}</span>
              </div>

              {invoice.fees.map((fee) => (
                <div key={fee.id} className="flex justify-between">
                  <span className="text-gray-600">
                    {fee.name} {fee.type === "percentage" ? `(${fee.value}%)` : ""}:
                  </span>
                  <span>{formatCurrency(fee.amount)}</span>
                </div>
              ))}

              <div className="pt-2 mt-2 border-t flex justify-between font-bold">
                <span>Total Due:</span>
                <span>{formatCurrency(invoice.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Notes:</h3>
            <p className="text-sm whitespace-pre-wrap">{invoice.notes}</p>
          </div>
        )}

        {/* Payment Instructions */}
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <h3 className="font-semibold mb-2">Payment Instructions:</h3>
          <p className="text-sm">
            Please make checks payable to ALLIED Wrecking or contact us for electronic payment options.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t pt-4 text-center text-sm text-gray-500 mt-auto">
          <p>Thank you for your business!</p>
          <p>Questions? Contact us at (813) 555-1234 or kilroydemo@gmail.com</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <div className={showPreview ? "hidden print:block" : ""}>
        <Header />
      </div>
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          {!showPreview ? (
            <>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <Button variant="ghost" onClick={() => router.back()} className="w-full sm:w-auto justify-start">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Customer
                </Button>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" onClick={togglePreview} className="w-full sm:w-auto bg-transparent">
                    Preview Invoice
                  </Button>
                  <Button variant="outline" onClick={printInvoice} className="w-full sm:w-auto bg-transparent">
                    <Printer className="mr-2 h-4 w-4" /> Print
                  </Button>
                  <Button onClick={downloadPdf} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Create Invoice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Invoice Details */}
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="invoiceNumber">Invoice Number</Label>
                          <Input
                            id="invoiceNumber"
                            value={invoice.invoiceNumber}
                            onChange={(e) => setInvoice((prev) => ({ ...prev, invoiceNumber: e.target.value }))}
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="dateCreated">Invoice Date</Label>
                            <Input
                              id="dateCreated"
                              type="date"
                              value={invoice.dateCreated}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, dateCreated: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="dateDue">Due Date</Label>
                            <Input
                              id="dateDue"
                              type="date"
                              value={invoice.dateDue}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, dateDue: e.target.value }))}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Line Items */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <button
                            type="button"
                            onClick={() => toggleSection("items")}
                            className="flex items-center text-lg font-medium md:hidden"
                          >
                            Line Items
                            {expandedSections.items ? (
                              <ChevronUp className="ml-2 h-5 w-5" />
                            ) : (
                              <ChevronDown className="ml-2 h-5 w-5" />
                            )}
                          </button>
                          <h3 className="text-lg font-medium hidden md:block">Line Items</h3>
                          <Button variant="outline" size="sm" onClick={addItem}>
                            <Plus className="h-4 w-4 mr-1" /> Add Item
                          </Button>
                        </div>

                        {expandedSections.items && (
                          <div className="border rounded-md overflow-x-auto">
                            <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 border-b">
                              <div className="col-span-5 font-medium">Description</div>
                              <div className="col-span-2 font-medium">Quantity</div>
                              <div className="col-span-2 font-medium">Unit Price</div>
                              <div className="col-span-2 font-medium">Amount</div>
                              <div className="col-span-1"></div>
                            </div>

                            {invoice.items.map((item) => (
                              <div key={item.id} className="grid grid-cols-12 gap-2 p-3 border-b last:border-0">
                                <div className="col-span-5">
                                  <Input
                                    value={item.description}
                                    onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                                    placeholder="Item description"
                                  />
                                </div>
                                <div className="col-span-2">
                                  <Input
                                    type="number"
                                    min="1"
                                    placeholder="Qty"
                                    value={item.quantity === 0 ? "" : item.quantity}
                                    onChange={(e) => {
                                      const value = e.target.value === "" ? 0 : Number(e.target.value)
                                      handleItemChange(item.id, "quantity", value)
                                    }}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <Input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Price"
                                    value={item.unitPrice === 0 ? "" : item.unitPrice}
                                    onChange={(e) => {
                                      const value = e.target.value === "" ? 0 : Number(e.target.value)
                                      handleItemChange(item.id, "unitPrice", value)
                                    }}
                                  />
                                </div>
                                <div className="col-span-2 flex items-center">{formatCurrency(item.amount)}</div>
                                <div className="col-span-1 flex justify-center">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeItem(item.id)}
                                    disabled={invoice.items.length === 1}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Fees */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <button
                            type="button"
                            onClick={() => toggleSection("fees")}
                            className="flex items-center text-lg font-medium md:hidden"
                          >
                            Fees & Taxes
                            {expandedSections.fees ? (
                              <ChevronUp className="ml-2 h-5 w-5" />
                            ) : (
                              <ChevronDown className="ml-2 h-5 w-5" />
                            )}
                          </button>
                          <h3 className="text-lg font-medium hidden md:block">Fees & Taxes</h3>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => addFee("fixed")}>
                              <Plus className="h-4 w-4 mr-1" /> Add Fee
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => addFee("percentage")}>
                              <Plus className="h-4 w-4 mr-1" /> Add % Fee
                            </Button>
                          </div>
                        </div>

                        {expandedSections.fees && (
                          <>
                            {invoice.fees.length > 0 ? (
                              <div className="border rounded-md overflow-x-auto">
                                <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 border-b">
                                  <div className="col-span-5 font-medium">Name</div>
                                  <div className="col-span-3 font-medium">Type</div>
                                  <div className="col-span-2 font-medium">Value</div>
                                  <div className="col-span-1 font-medium">Amount</div>
                                  <div className="col-span-1"></div>
                                </div>

                                {invoice.fees.map((fee) => (
                                  <div key={fee.id} className="grid grid-cols-12 gap-2 p-3 border-b last:border-0">
                                    <div className="col-span-5">
                                      <Input
                                        value={fee.name}
                                        onChange={(e) => handleFeeChange(fee.id, "name", e.target.value)}
                                        placeholder="Fee name"
                                      />
                                    </div>
                                    <div className="col-span-3">
                                      <Select
                                        value={fee.type}
                                        onValueChange={(value) =>
                                          handleFeeChange(fee.id, "type", value as "fixed" | "percentage")
                                        }
                                      >
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="fixed">Fixed Amount</SelectItem>
                                          <SelectItem value="percentage">Percentage</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="col-span-2">
                                      <div className="relative">
                                        <Input
                                          type="number"
                                          min="0"
                                          step={fee.type === "percentage" ? "0.01" : "1"}
                                          placeholder={fee.type === "percentage" ? "%" : "$"}
                                          value={fee.value === 0 ? "" : fee.value}
                                          onChange={(e) => {
                                            const value = e.target.value === "" ? 0 : Number(e.target.value)
                                            handleFeeChange(fee.id, "value", value)
                                          }}
                                        />
                                        {fee.type === "percentage" && (
                                          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                            %
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <div className="col-span-1 flex items-center">{formatCurrency(fee.amount)}</div>
                                    <div className="col-span-1 flex justify-center">
                                      <Button variant="ghost" size="icon" onClick={() => removeFee(fee.id)}>
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-4 border rounded-md bg-gray-50">
                                <p className="text-muted-foreground">No fees added yet</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      {/* Notes */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <button
                            type="button"
                            onClick={() => toggleSection("notes")}
                            className="flex items-center text-lg font-medium md:hidden"
                          >
                            Notes
                            {expandedSections.notes ? (
                              <ChevronUp className="ml-2 h-5 w-5" />
                            ) : (
                              <ChevronDown className="ml-2 h-5 w-5" />
                            )}
                          </button>
                          <Label htmlFor="notes" className="text-lg font-medium hidden md:block">
                            Notes
                          </Label>
                        </div>

                        {expandedSections.notes && (
                          <Textarea
                            id="notes"
                            value={invoice.notes}
                            onChange={(e) => setInvoice((prev) => ({ ...prev, notes: e.target.value }))}
                            placeholder="Add any notes or payment instructions..."
                            className="min-h-[100px]"
                          />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {/* Customer Information */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>Customer Information</CardTitle>
                      <button type="button" onClick={() => toggleSection("customer")} className="md:hidden">
                        {expandedSections.customer ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </CardHeader>
                    <CardContent>
                      {expandedSections.customer && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="customerName">Name</Label>
                            <Input
                              id="customerName"
                              value={invoice.customerName}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, customerName: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="customerEmail">Email</Label>
                            <Input
                              id="customerEmail"
                              type="email"
                              value={invoice.customerEmail}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, customerEmail: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="customerPhone">Phone</Label>
                            <Input
                              id="customerPhone"
                              value={invoice.customerPhone}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, customerPhone: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="customerAddress">Address</Label>
                            <Textarea
                              id="customerAddress"
                              value={invoice.customerAddress}
                              onChange={(e) => setInvoice((prev) => ({ ...prev, customerAddress: e.target.value }))}
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Invoice Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Invoice Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal:</span>
                          <span>{formatCurrency(invoice.subtotal)}</span>
                        </div>

                        {invoice.fees.map((fee) => (
                          <div key={fee.id} className="flex justify-between">
                            <span className="text-muted-foreground">
                              {fee.name} {fee.type === "percentage" ? `(${fee.value}%)` : ""}:
                            </span>
                            <span>{formatCurrency(fee.amount)}</span>
                          </div>
                        ))}

                        <div className="pt-2 mt-2 border-t flex justify-between font-bold">
                          <span>Total:</span>
                          <span>{formatCurrency(invoice.total)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button className="w-full" onClick={printInvoice}>
                          <Printer className="mr-2 h-4 w-4" /> Print Invoice
                        </Button>
                        <Button className="w-full" onClick={downloadPdf}>
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                        <Button className="w-full" onClick={sendInvoice}>
                          <Send className="mr-2 h-4 w-4" /> Send to Customer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <div className="print:p-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 print:hidden">
                <Button variant="outline" onClick={togglePreview} className="w-full sm:w-auto bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Editor
                </Button>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" onClick={printInvoice} className="w-full sm:w-auto bg-transparent">
                    <Printer className="mr-2 h-4 w-4" /> Print Invoice
                  </Button>
                  <Button onClick={downloadPdf} disabled={isGeneratingPdf} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    {isGeneratingPdf ? "Generating PDF..." : "Download PDF"}
                  </Button>
                  <Button onClick={sendInvoice} className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" /> Send to Customer
                  </Button>
                </div>
              </div>
              <InvoicePreview />
            </div>
          )}
        </div>
      </main>
      <div className={showPreview ? "hidden print:block" : ""}>
        <Footer />
      </div>
    </div>
  )
}
