import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function BuildingWreckingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/commercial-demolition-aerial.png"
              alt="Commercial Building Demolition"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Building Wrecking Services</h1>
              <p className="text-xl md:text-2xl">
                Professional, safe, and efficient demolition services for structures of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Building Demolition</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking specializes in the safe, efficient demolition of buildings and structures throughout
                Tampa and surrounding areas. From small residential homes to large commercial buildings, our experienced
                team has the expertise and equipment to handle demolition projects of any scale.
              </p>
              <p className="text-lg mb-6">
                We approach each project with careful planning and precision, ensuring that structures are demolished
                safely while minimizing impact on surrounding properties and the environment.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Building Wrecking Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Complete Structure Demolition</h3>
                    <p>Full demolition of houses, commercial buildings, and industrial structures.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Partial Demolition</h3>
                    <p>Selective removal of specific portions of buildings for renovation or expansion projects.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Interior Demolition</h3>
                    <p>Removal of interior walls, fixtures, and finishes while preserving the exterior structure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Foundation Removal</h3>
                    <p>Complete extraction of concrete foundations, slabs, and footings.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Debris Removal and Recycling</h3>
                    <p>Efficient hauling and environmentally responsible processing of demolition materials.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Site Preparation</h3>
                    <p>Grading and preparation of the site for future construction after demolition is complete.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Building Demolition Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Initial Consultation and Assessment</h3>
                  <p>
                    We begin with a thorough evaluation of the structure to be demolished, identifying potential
                    challenges and developing a strategic demolition plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Permitting and Compliance</h3>
                  <p>
                    Our team handles all necessary demolition permits and ensures compliance with local regulations,
                    including notifications to utility companies and neighbors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Environmental Assessment</h3>
                  <p>
                    We conduct testing for hazardous materials such as asbestos and lead paint, arranging for proper
                    abatement if necessary before demolition begins.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Utility Disconnection</h3>
                  <p>
                    All utilities are properly disconnected and capped, including electricity, gas, water, and sewer
                    lines, ensuring safety during the demolition process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Demolition Execution</h3>
                  <p>
                    Using specialized equipment and techniques appropriate for the specific structure, we carefully
                    demolish the building while implementing dust control and safety measures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Material Sorting and Recycling</h3>
                  <p>
                    We separate demolition materials for recycling, including concrete, metal, wood, and other
                    recyclable components, minimizing landfill waste.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Site Cleanup and Preparation</h3>
                  <p>
                    After demolition, we thoroughly clean the site, remove all debris, and prepare the area for its next
                    use, whether that's new construction or landscaping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking for Building Demolition</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Safety First Approach:</span> We maintain rigorous safety protocols to
                    protect our workers, your property, and surrounding areas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Experienced Team:</span> Our demolition experts have successfully
                    completed hundreds of projects throughout Tampa and surrounding areas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Modern Equipment:</span> We utilize specialized demolition machinery
                    that enables efficient, precise, and safe building removal.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Environmental Responsibility:</span> Our commitment to recycling and
                    proper waste management minimizes the environmental impact of demolition.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Fully Insured and Licensed:</span> We carry comprehensive insurance
                    coverage and all necessary licenses for demolition work in Florida.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Turnkey Service:</span> From permitting to final site preparation, we
                    handle every aspect of your demolition project.
                  </p>
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
                  <h3 className="text-xl font-bold mb-2">How long does building demolition take?</h3>
                  <p>
                    The timeline varies depending on the size and complexity of the structure. Small residential
                    demolitions may take 1-3 days, while larger commercial projects can take several weeks. We provide a
                    detailed timeline during the initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What permits are required for demolition in Tampa?</h3>
                  <p>
                    Demolition in Tampa typically requires a demolition permit from the city or county building
                    department. Additional permits may be needed for asbestos abatement, tree removal, or historic
                    preservation clearance. Our team handles all permitting requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How do you handle hazardous materials like asbestos?</h3>
                  <p>
                    We conduct testing for hazardous materials before demolition begins. If asbestos or other hazardous
                    materials are found, we work with licensed abatement contractors to safely remove these materials in
                    compliance with all regulations before proceeding with demolition.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Will demolition damage neighboring properties?</h3>
                  <p>
                    We take extensive precautions to protect neighboring properties, including dust control measures,
                    vibration monitoring when necessary, and careful planning of equipment placement and demolition
                    techniques. Our goal is zero impact on surrounding structures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What happens to the demolition debris?</h3>
                  <p>
                    We sort demolition materials on-site or at processing facilities to maximize recycling. Concrete is
                    typically crushed and recycled as aggregate, metals are sent to recycling facilities, and wood may
                    be processed into mulch or biomass fuel. Materials that cannot be recycled are disposed of properly
                    at licensed facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Demolition Project?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your building wrecking project.
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
