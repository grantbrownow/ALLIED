"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function InvoiceViewPage({ params }: { params: { id: string; invoiceId: string } }) {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>

          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Invoice Not Available</h1>
            <p className="mb-6">Invoices are not stored and must be created, printed, or sent directly.</p>
            <Button onClick={() => router.push(`/crm-dashboard/${params.id}/create-invoice`)}>
              Create New Invoice
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
