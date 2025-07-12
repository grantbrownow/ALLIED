export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

export interface InvoiceFee {
  id: string
  name: string
  type: "fixed" | "percentage"
  value: number
  amount: number
}

export interface Invoice {
  id: string
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  invoiceNumber: string
  dateCreated: string
  dateDue: string
  items: InvoiceItem[]
  fees: InvoiceFee[]
  notes: string
  subtotal: number
  total: number
  status: "draft" | "sent" | "paid" | "overdue"
}
