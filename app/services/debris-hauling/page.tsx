import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function DebrisHaulingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/debris-hauling-truck.png"
              alt="Debris Hauling with Dump Truck"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Debris Hauling Services</h1>
              <p className="text-xl md:text-2xl">
                Professional removal and disposal of construction debris, demolition waste, and unwanted materials.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Debris Hauling Solutions</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking provides efficient, environmentally responsible debris hauling services for residential,
                commercial, and industrial clients throughout Tampa and surrounding areas. Whether you're cleaning up
                after a renovation, managing demolition waste, or simply need to clear unwanted materials from your
                property, our experienced team has the equipment and expertise to handle the job properly.
              </p>
              <p className="text-lg mb-6">
                We pride ourselves on prompt service, responsible disposal practices, and our commitment to recycling as
                much material as possible, minimizing landfill waste and environmental impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Debris Hauling Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Construction Debris Removal</h3>
                    <p>
                      Cleanup and hauling of waste materials from construction, renovation, and remodeling projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Demolition Waste Hauling</h3>
                    <p>
                      Removal and disposal of debris from demolition projects, including concrete, wood, metal, and
                      mixed materials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Property Cleanouts</h3>
                    <p>
                      Complete removal of unwanted materials from residential, commercial, or industrial properties.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Storm Debris Cleanup</h3>
                    <p>Prompt removal of debris following storms, hurricanes, and other weather events.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Concrete and Asphalt Removal</h3>
                    <p>
                      Hauling of broken concrete, asphalt, and other heavy materials from demolition or renovation
                      projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Green Waste Removal</h3>
                    <p>
                      Removal of trees, stumps, branches, and other vegetation from land clearing or landscaping
                      projects.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Materials We Handle */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Materials We Handle</h2>
              <p className="text-lg mb-6">
                Our debris hauling service can accommodate a wide range of materials, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Concrete and masonry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Wood and lumber</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Drywall and plaster</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Roofing materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Metal and wire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Carpet and flooring</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Furniture and fixtures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Yard waste and vegetation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Dirt and soil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>Mixed construction debris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>General trash and junk</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg mt-6">
                <strong>Note:</strong> We do not handle hazardous materials such as asbestos, chemicals, paint, oils, or
                other regulated substances. For these materials, we can refer you to specialized disposal services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Debris Hauling Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Initial Consultation</h3>
                  <p>
                    We begin with a discussion of your debris removal needs, including the type and volume of materials
                    to be hauled away.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Site Assessment</h3>
                  <p>
                    For larger jobs, we conduct an on-site assessment to determine the appropriate equipment, labor
                    requirements, and provide an accurate quote.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Scheduling</h3>
                  <p>
                    We work with you to schedule the debris removal at a convenient time, with options for same-day or
                    next-day service for urgent needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Debris Collection</h3>
                  <p>
                    Our team arrives with appropriate equipment and efficiently loads all debris, taking care to protect
                    your property during the process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Material Sorting</h3>
                  <p>
                    We sort materials for recycling and proper disposal, maximizing the amount diverted from landfills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Responsible Disposal</h3>
                  <p>
                    All materials are transported to appropriate facilities for recycling, processing, or disposal in
                    accordance with local regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Site Cleanup</h3>
                  <p>After debris removal, we ensure the area is clean and ready for your next project or use.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">8. Documentation</h3>
                  <p>
                    For commercial clients or when required, we provide documentation of proper disposal for your
                    records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking for Debris Hauling</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Reliable Service:</span> We show up when promised and complete the job
                    efficiently, respecting your time and property.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Proper Equipment:</span> We have the right trucks, containers, and tools
                    to handle debris removal jobs of any size.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Environmental Responsibility:</span> Our commitment to recycling and
                    proper waste management minimizes environmental impact.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Competitive Pricing:</span> We offer fair, transparent pricing with no
                    hidden fees or surprises.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Fully Insured:</span> We carry comprehensive insurance coverage to
                    protect your property and our workers.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Local Expertise:</span> As a Tampa-based company, we understand local
                    regulations and disposal requirements, ensuring compliance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">How quickly can you remove debris from my property?</h3>
                  <p>
                    For standard residential debris removal, we can often provide same-day or next-day service,
                    depending on our current schedule and the volume of materials. Larger commercial projects may
                    require additional planning, but we pride ourselves on responsive service and will work with your
                    timeline.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How do you determine the cost of debris hauling?</h3>
                  <p>
                    Our pricing is based on several factors, including the volume and type of debris, accessibility of
                    the materials, distance to disposal facilities, and labor requirements. We provide clear, upfront
                    quotes after assessing your specific needs, with no hidden fees or surprises.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Do I need to be present when you remove the debris?</h3>
                  <p>
                    While it's helpful for you to be present to confirm exactly what needs to be removed, it's not
                    always necessary. We can make arrangements for debris removal even when you're not on site, as long
                    as we have clear instructions and access to the materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What happens to the debris after you haul it away?</h3>
                  <p>
                    We sort materials for maximum recycling potential. Recyclable materials like metal, concrete, clean
                    wood, and cardboard are taken to appropriate recycling facilities. Materials that cannot be recycled
                    are disposed of properly at licensed waste management facilities in accordance with local
                    regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Can you remove debris from difficult-to-access locations?</h3>
                  <p>
                    Yes, we have experience removing debris from challenging locations, including narrow alleys,
                    hillsides, backyards without direct access, and multi-story buildings. We have specialized equipment
                    and techniques to handle these situations, though additional labor or equipment may affect pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Need Debris Hauling Services?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for prompt, professional debris removal and hauling.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#quote-form">GET A FREE QUOTE</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
