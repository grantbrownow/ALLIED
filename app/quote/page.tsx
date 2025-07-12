import { TallyForm } from "@/components/tally-form"

export default function QuotePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Get a Quote</h1>
      <p className="mb-5">Please fill out the form below to receive a personalized quote.</p>
      <TallyForm />
    </div>
  )
}
