import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function FloodDamagePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/before-after-demolition.png"
              alt="Before and After Demolition"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Flood Damage Demolition</h1>
              <p className="text-xl md:text-2xl">
                Specialized demolition services for properties damaged by flooding and water intrusion.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Flood Damage Demolition</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking provides specialized demolition services for properties affected by flooding and water
                damage throughout Tampa and surrounding areas. We understand the unique challenges posed by
                water-damaged structures and have the expertise to safely and efficiently remove compromised building
                materials.
              </p>
              <p className="text-lg mb-6">
                Whether you're dealing with the aftermath of a hurricane, storm surge, plumbing failure, or other water
                intrusion event, our team can help you take the first step toward recovery by removing damaged
                components and preparing your property for restoration or rebuilding.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Flood Damage Demolition Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Selective Interior Demolition</h3>
                    <p>
                      Removal of water-damaged drywall, flooring, insulation, and other affected materials while
                      preserving structural elements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Complete Structure Demolition</h3>
                    <p>For severely damaged buildings that cannot be salvaged, we provide full demolition services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Mold Remediation Preparation</h3>
                    <p>
                      Removal of materials affected by mold growth following water damage, preparing the space for
                      professional remediation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Debris Removal and Disposal</h3>
                    <p>Efficient hauling and proper disposal of water-damaged materials and contents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Structural Drying Preparation</h3>
                    <p>
                      Opening up wall cavities, removing flooring, and other necessary steps to facilitate thorough
                      drying of the structure.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Emergency Response</h3>
                    <p>
                      Rapid mobilization for time-sensitive situations to prevent further damage and begin the recovery
                      process.
                    </p>
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
              <h2 className="text-3xl font-bold mb-6">Our Flood Damage Demolition Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Initial Assessment</h3>
                  <p>
                    We begin with a thorough evaluation of the water damage to determine the extent of necessary
                    demolition and develop a strategic plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Safety Inspection</h3>
                  <p>
                    Our team assesses structural integrity, electrical hazards, and potential contaminants to ensure
                    safe working conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Documentation</h3>
                  <p>
                    We document the damage for insurance purposes, providing detailed information about the affected
                    areas and necessary demolition work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Containment Setup</h3>
                  <p>
                    When necessary, we establish containment barriers to prevent cross-contamination during the
                    demolition process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Selective Demolition</h3>
                  <p>
                    Our team carefully removes damaged materials, focusing on affected areas while preserving intact
                    structural elements and salvageable components.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Material Sorting and Disposal</h3>
                  <p>
                    We separate demolition debris for proper disposal, following all regulations for handling
                    potentially contaminated materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Structural Cleaning</h3>
                  <p>
                    After demolition, we clean exposed structural elements to remove residual contaminants and prepare
                    for reconstruction.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">8. Final Inspection</h3>
                  <p>
                    We conduct a thorough inspection to ensure all damaged materials have been removed and the property
                    is ready for the next phase of restoration.
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
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking for Flood Damage Demolition</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Specialized Experience:</span> Our team has extensive experience with
                    water-damaged properties and understands the unique challenges they present.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Rapid Response:</span> We understand the time-sensitive nature of flood
                    damage and can mobilize quickly to prevent further deterioration.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Health and Safety Focus:</span> We follow strict protocols to address
                    potential hazards like mold, bacteria, and structural instability.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Insurance Expertise:</span> We work with insurance adjusters and can
                    provide detailed documentation to support your claim.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Proper Disposal:</span> We ensure all water-damaged materials are
                    disposed of according to local regulations, particularly important for contaminated materials.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Restoration Coordination:</span> We can work alongside your restoration
                    contractors to ensure a smooth transition from demolition to rebuilding.
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
                  <h3 className="text-xl font-bold mb-2">How quickly can you respond after a flood?</h3>
                  <p>
                    We prioritize emergency flood damage situations and can typically respond within 24-48 hours of your
                    call, depending on current demand and road conditions. For widespread flooding events, we implement
                    a triage system to address the most severe cases first.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How much demolition is necessary after water damage?</h3>
                  <p>
                    The extent of necessary demolition depends on several factors, including the type of water (clean,
                    gray, or black), duration of exposure, building materials affected, and presence of mold. Generally,
                    porous materials like drywall, insulation, and carpeting that have been saturated need to be
                    removed, while structural elements can often be dried and preserved.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Will my insurance cover flood damage demolition?</h3>
                  <p>
                    Most standard homeowner's insurance policies don't cover flood damage, but if you have separate
                    flood insurance through the National Flood Insurance Program (NFIP) or a private insurer, demolition
                    costs are typically covered. We can work directly with your insurance adjuster to document the
                    damage and necessary work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How do you handle mold during flood damage demolition?</h3>
                  <p>
                    When mold is present, we implement containment measures to prevent spore spread, use proper personal
                    protective equipment, and follow industry protocols for safe removal. For extensive mold issues, we
                    coordinate with certified mold remediation specialists.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Can you salvage any materials after flooding?</h3>
                  <p>
                    Non-porous materials like metal, solid wood, and some plastics can often be cleaned and salvaged. We
                    carefully evaluate all materials and preserve those that can be safely retained, helping to reduce
                    overall restoration costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Dealing with Flood Damage?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a prompt assessment and expert flood damage demolition
              services.
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
