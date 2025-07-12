import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function PoolDemolitionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/concrete-breaking.png"
              alt="Concrete Breaking with Excavator"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Pool Demolition Services</h1>
              <p className="text-xl md:text-2xl">
                Expert swimming pool removal services to reclaim your yard space and eliminate maintenance costs.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Professional Pool Removal</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking specializes in the removal of in-ground swimming pools for homeowners throughout Tampa
                and surrounding areas. Whether your pool has become a maintenance burden, you're looking to reclaim yard
                space, or you're preparing your property for sale, our expert team can help you say goodbye to your
                unwanted pool.
              </p>
              <p className="text-lg mb-6">
                We offer both partial and complete pool removal options, tailored to your specific needs and budget. Our
                process ensures proper drainage, structural integrity, and site preparation for your yard's next
                chapter.
              </p>
            </div>
          </div>
        </section>

        {/* Pool Removal Options */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Pool Removal Options</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Partial Pool Removal (Fill-In)</h3>
                <p className="mb-4">
                  Partial pool removal involves breaking up the top portion of the pool (typically 18-36 inches),
                  punching holes in the bottom for drainage, and filling the remaining shell with clean fill material.
                  This option is more economical and less disruptive to your property.
                </p>
                <h4 className="text-lg font-bold mb-2">Ideal for:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Budget-conscious homeowners</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Properties where access is limited</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Situations where minimal disruption is preferred</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Yards planned for landscaping or gardens</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Complete Pool Removal</h3>
                <p className="mb-4">
                  Complete pool removal involves demolishing and removing the entire pool structure, including the
                  floor, walls, and decking. The hole is then filled with clean fill dirt, compacted in layers, and
                  finished with topsoil. This option provides complete restoration of your property.
                </p>
                <h4 className="text-lg font-bold mb-2">Ideal for:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Properties being prepared for sale</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Areas planned for future construction</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Homeowners concerned about property value</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Situations requiring unrestricted future use of the property</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Pool Removal Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Initial Consultation</h3>
                  <p>
                    We begin with a thorough assessment of your pool and property to determine the best removal approach
                    and provide an accurate quote.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Permitting</h3>
                  <p>Our team handles all necessary permits required by your local municipality for pool removal.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Utility Disconnection</h3>
                  <p>
                    We ensure all electrical, plumbing, and gas connections to the pool are properly disconnected and
                    capped.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Drainage</h3>
                  <p>
                    The pool is drained in accordance with local regulations, ensuring proper disposal of the water.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Demolition</h3>
                  <p>
                    Depending on the chosen method, we either break up the top portion of the pool or completely remove
                    the entire structure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Drainage Preparation</h3>
                  <p>
                    For partial removals, we punch holes in the bottom to ensure proper drainage and prevent water
                    accumulation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Filling and Compaction</h3>
                  <p>The void is filled with clean fill material, compacted in layers to prevent settling over time.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">8. Final Grading</h3>
                  <p>
                    We finish with topsoil and grade the area to ensure proper drainage away from your home's
                    foundation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">9. Site Cleanup</h3>
                  <p>All debris is removed, and the site is left clean and ready for its next use.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Benefits of Pool Removal</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Eliminate Maintenance Costs</h3>
                    <p>Save thousands of dollars annually on chemicals, utilities, repairs, and regular maintenance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Reclaim Valuable Space</h3>
                    <p>Transform your backyard into usable space for gardens, patios, play areas, or other features.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Reduce Liability</h3>
                    <p>
                      Eliminate the safety risks associated with pool ownership and potentially lower your homeowner's
                      insurance premiums.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Increase Property Appeal</h3>
                    <p>
                      Make your property more attractive to a wider range of potential buyers who may not want the
                      responsibility of pool ownership.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Reduce Water Usage</h3>
                    <p>Contribute to water conservation efforts, especially important in Florida's climate.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">How much does pool removal cost?</h3>
                  <p>
                    The cost varies depending on pool size, access to your property, removal method, and local
                    requirements. Partial removals typically range from $5,000-$15,000, while complete removals can
                    range from $10,000-$25,000. We provide detailed, transparent quotes after assessing your specific
                    situation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How long does pool removal take?</h3>
                  <p>
                    Most pool removals take 3-7 days from start to finish, depending on the size, removal method, and
                    weather conditions. The permitting process typically adds 1-3 weeks before work can begin.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Will removing my pool affect my property value?</h3>
                  <p>
                    This depends on your local market. In many cases, removing an old or deteriorating pool can increase
                    property value and appeal to a broader range of buyers. In some luxury markets, a pool may be
                    expected. We're happy to discuss the specifics of your situation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Do I need to disclose a removed pool when selling my home?</h3>
                  <p>
                    In Florida, you typically need to disclose a partial pool removal (fill-in) to potential buyers.
                    Complete removals may not require disclosure if properly documented, but disclosure laws vary. We
                    recommend consulting with a real estate attorney for specific advice.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Can I build on the area where my pool was removed?</h3>
                  <p>
                    With a complete pool removal, you can typically build structures on the site. With partial removal,
                    the area is generally suitable for landscaping, patios, or other non-structural uses. Local building
                    codes may have specific requirements, which we can discuss during consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Unwanted Pool?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your pool removal project.
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
