import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CarportGarageShedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/demolition-team-planning.png"
              alt="Demolition Team Planning Garage Removal"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Carport, Garage & Shed Demolition</h1>
              <p className="text-xl md:text-2xl">
                Professional removal of outdoor structures to clear space for new projects or improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Outdoor Structure Demolition</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking specializes in the safe, efficient demolition of carports, garages, sheds, and other
                outdoor structures throughout Tampa and surrounding areas. Whether you're removing an old, deteriorating
                structure, making way for new construction, or simply reclaiming your yard space, our experienced team
                has the expertise and equipment to handle the job properly.
              </p>
              <p className="text-lg mb-6">
                We approach each project with careful planning and precision, ensuring that structures are demolished
                safely while minimizing impact on your property and the environment.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Demolition Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Carport Removal</h3>
                    <p>
                      Complete demolition and removal of attached or freestanding carports, including support posts,
                      roofing, and concrete pads if desired.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Garage Demolition</h3>
                    <p>
                      Safe removal of attached or detached garages, including walls, roofing, doors, and concrete slabs
                      when needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Shed Removal</h3>
                    <p>
                      Efficient demolition of storage sheds, garden sheds, and utility buildings of all sizes and
                      materials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Workshop Demolition</h3>
                    <p>
                      Removal of larger workshop structures, including electrical and plumbing disconnections when
                      present.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Concrete Pad Removal</h3>
                    <p>
                      Breaking up and removing concrete foundations, slabs, and footings associated with outdoor
                      structures.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Debris Removal and Recycling</h3>
                    <p>Complete cleanup and environmentally responsible disposal of all demolition materials.</p>
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
              <h2 className="text-3xl font-bold mb-6">Our Demolition Process</h2>
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
                    including HOA approvals if applicable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Utility Disconnection</h3>
                  <p>
                    If your structure has electricity, water, or gas connections, we ensure these are properly
                    disconnected and capped before demolition begins.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Site Preparation</h3>
                  <p>
                    We prepare the area by removing any items from the structure, protecting surrounding landscaping,
                    and setting up safety barriers as needed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Demolition Execution</h3>
                  <p>
                    Using appropriate equipment and techniques for the specific structure, we carefully demolish the
                    building while implementing dust control and safety measures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Material Sorting and Recycling</h3>
                  <p>
                    We separate demolition materials for recycling, including metal, wood, concrete, and other
                    recyclable components, minimizing landfill waste.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Site Cleanup</h3>
                  <p>
                    After demolition, we thoroughly clean the site, remove all debris, and prepare the area for its next
                    use.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">8. Final Inspection</h3>
                  <p>
                    We conduct a final walkthrough with you to ensure the work meets your expectations and the site is
                    properly prepared for your next project.
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
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Experienced Professionals:</span> Our team has demolished hundreds of
                    outdoor structures throughout Tampa and surrounding areas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Proper Equipment:</span> We utilize specialized machinery that enables
                    efficient, precise demolition while minimizing impact on your property.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Safety Focus:</span> We maintain rigorous safety protocols to protect
                    our workers, your property, and surrounding areas.
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
                    <span className="font-bold">Turnkey Service:</span> From permitting to final cleanup, we handle
                    every aspect of your demolition project.
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
                  <h3 className="text-xl font-bold mb-2">Do I need a permit to demolish my garage or shed?</h3>
                  <p>
                    In most Tampa area municipalities, permits are required for demolishing structures over a certain
                    size (typically 120-200 square feet). Our team handles all permitting requirements as part of our
                    service, ensuring compliance with local regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How long does it take to demolish a typical garage?</h3>
                  <p>
                    Most standard garage demolitions can be completed in 1-2 days. Larger structures, those with
                    concrete slabs to be removed, or projects with limited access may take longer. We provide a specific
                    timeline during our initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Can you remove just the structure and leave the concrete slab?
                  </h3>
                  <p>
                    Absolutely. Many clients choose to keep the existing concrete slab for future use. We can carefully
                    remove the structure while preserving the slab, or we can remove both—whatever best suits your
                    needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What happens to the demolition debris?</h3>
                  <p>
                    We sort demolition materials for maximum recycling. Metal components are typically recycled, wood
                    may be processed into mulch or biomass fuel, and concrete can be crushed and recycled as aggregate.
                    Materials that cannot be recycled are disposed of properly at licensed facilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Will demolition damage my yard or landscaping?</h3>
                  <p>
                    We take extensive precautions to protect your property during demolition. This includes careful
                    equipment operation, protective barriers for nearby structures or plants, and thorough cleanup
                    afterward. Our goal is to minimize impact on your property beyond the demolition area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Unwanted Structure?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your carport, garage, or shed removal
              project.
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
