import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function FireDamagePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/loader-dumping-debris.png"
              alt="Loader Dumping Debris from Demolition"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Fire Damage Demolition</h1>
              <p className="text-xl md:text-2xl">
                Specialized demolition services for properties damaged by fire and smoke.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Fire Damage Demolition</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking provides specialized demolition services for properties affected by fire and smoke
                damage throughout Tampa and surrounding areas. We understand the complex challenges posed by
                fire-damaged structures and have the expertise to safely and efficiently remove compromised building
                materials.
              </p>
              <p className="text-lg mb-6">
                After a fire, proper demolition is a critical first step in the recovery process. Our experienced team
                can assess the damage, develop a strategic demolition plan, and execute it with precision, preparing
                your property for restoration or rebuilding.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Fire Damage Demolition Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Structural Assessment</h3>
                    <p>
                      Thorough evaluation of fire-damaged structures to determine the extent of necessary demolition.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Selective Interior Demolition</h3>
                    <p>
                      Removal of fire and smoke-damaged materials while preserving structural elements that remain
                      sound.
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
                    <h3 className="font-bold text-lg">Debris Removal and Disposal</h3>
                    <p>Efficient hauling and proper disposal of fire-damaged materials and contents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Hazardous Material Handling</h3>
                    <p>
                      Safe removal and disposal of materials containing asbestos, lead, or other hazardous substances
                      that may be exposed or affected by fire.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Emergency Response</h3>
                    <p>
                      Rapid mobilization for time-sensitive situations to secure the property and begin the recovery
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
              <h2 className="text-3xl font-bold mb-6">Our Fire Damage Demolition Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Initial Assessment</h3>
                  <p>
                    We begin with a thorough evaluation of the fire damage to determine structural integrity and develop
                    a strategic demolition plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Safety Inspection</h3>
                  <p>
                    Our team assesses structural stability, electrical hazards, and potential contaminants to ensure
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
                  <h3 className="text-xl font-bold mb-3">4. Hazardous Material Testing</h3>
                  <p>
                    When necessary, we test for asbestos, lead, and other hazardous materials that may require
                    specialized handling during demolition.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Containment Setup</h3>
                  <p>
                    We establish containment barriers to prevent cross-contamination and control dust during the
                    demolition process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Selective Demolition</h3>
                  <p>
                    Our team carefully removes damaged materials, focusing on affected areas while preserving intact
                    structural elements and salvageable components.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">7. Material Sorting and Disposal</h3>
                  <p>
                    We separate demolition debris for proper disposal, following all regulations for handling
                    potentially contaminated materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">8. Structural Cleaning</h3>
                  <p>
                    After demolition, we clean exposed structural elements to remove residual soot, smoke, and
                    contaminants to prepare for reconstruction.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">9. Final Inspection</h3>
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
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking for Fire Damage Demolition</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Specialized Experience:</span> Our team has extensive experience with
                    fire-damaged properties and understands the unique challenges they present.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Safety Expertise:</span> We follow strict safety protocols to address
                    the specific hazards associated with fire-damaged structures.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Rapid Response:</span> We understand the time-sensitive nature of fire
                    damage and can mobilize quickly to secure your property and prevent further deterioration.
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
                    <span className="font-bold">Proper Disposal:</span> We ensure all fire-damaged materials are
                    disposed of according to local regulations, particularly important for hazardous materials.
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
                  <h3 className="text-xl font-bold mb-2">How quickly can you respond after a fire?</h3>
                  <p>
                    We prioritize emergency fire damage situations and can typically respond within 24-48 hours of your
                    call, depending on current demand. We understand that prompt action is essential to prevent further
                    damage and begin the recovery process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How much demolition is necessary after fire damage?</h3>
                  <p>
                    The extent of necessary demolition depends on several factors, including the severity of the fire,
                    the materials affected, and the structural integrity of the building. In some cases, only selective
                    demolition of obviously damaged materials is needed, while in others, more extensive or complete
                    demolition may be required. Our assessment will determine the appropriate approach.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Will my insurance cover fire damage demolition?</h3>
                  <p>
                    Most homeowner's insurance policies cover fire damage, including necessary demolition work. We can
                    work directly with your insurance adjuster to document the damage and necessary work, helping to
                    streamline the claims process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How do you handle smoke damage during demolition?</h3>
                  <p>
                    Smoke damage often extends beyond the areas directly affected by fire. We assess the full extent of
                    smoke damage and remove affected materials as necessary. For materials that can be salvaged, we
                    prepare them for professional cleaning by restoration specialists.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Can you salvage any materials after a fire?</h3>
                  <p>
                    Depending on the severity of the fire and the materials involved, some structural elements and
                    components may be salvageable. Our team carefully evaluates all materials and preserves those that
                    remain structurally sound and can be properly cleaned and restored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Dealing with Fire Damage?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a prompt assessment and expert fire damage demolition
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
