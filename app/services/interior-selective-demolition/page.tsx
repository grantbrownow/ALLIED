import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function InteriorSelectiveDemolitionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/concrete-breaking.png"
              alt="Interior Selective Demolition"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Interior Selective Demolition</h1>
              <p className="text-xl md:text-2xl">
                Precision interior demolition services for renovations, remodels, and commercial buildouts.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Interior Selective Demolition?</h2>
              <p className="text-lg mb-6">
                Interior selective demolition is the careful removal of specific interior elements while preserving the
                structural integrity and other components of a building. Unlike complete demolition, selective
                demolition targets only certain areas or features, making it ideal for renovation projects, commercial
                buildouts, and home remodels.
              </p>
              <p className="text-lg mb-6">
                At ALLIED Wrecking, our experienced team specializes in precise interior demolition that minimizes
                disruption to surrounding areas. We carefully remove walls, ceilings, flooring, fixtures, and other
                interior elements according to your project specifications, creating a clean slate for your renovation
                or remodeling project.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Common Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-50 p-6 rounded-lg border">
                    <h4 className="text-xl font-bold mb-3">Residential Remodeling</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kitchen and bathroom renovations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Opening up floor plans by removing walls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Removing outdated fixtures and finishes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Flooring removal and replacement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-zinc-50 p-6 rounded-lg border">
                    <h4 className="text-xl font-bold mb-3">Commercial Projects</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Office space reconfiguration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Retail store buildouts and renovations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Restaurant and hospitality renovations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Tenant improvement projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Interior Demolition Process</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                    <p>
                      We begin with a thorough on-site evaluation to understand your project goals, identify structural
                      elements that need to be preserved, and develop a detailed demolition plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pre-Demolition Preparation</h3>
                    <p>
                      Before work begins, we implement dust containment measures, protect adjacent areas, and ensure
                      utilities are properly disconnected or rerouted as needed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Selective Removal</h3>
                    <p>
                      Our team carefully removes targeted elements using specialized tools and techniques that minimize
                      damage to surrounding areas and reduce noise and dust.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Material Sorting and Recycling</h3>
                    <p>
                      We sort demolished materials for maximum recycling potential, diverting as much as possible from
                      landfills in accordance with our environmental commitment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cleanup and Preparation</h3>
                    <p>
                      After demolition is complete, we thoroughly clean the area and prepare it for the next phase of
                      your renovation or construction project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Professional Interior Demolition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Safety First Approach</h3>
                  <p>
                    Our team is trained in proper demolition techniques and safety protocols, reducing the risk of
                    accidents, injuries, and property damage that can occur with DIY demolition.
                  </p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Structural Integrity</h3>
                  <p>
                    We identify and preserve load-bearing walls and critical structural elements, ensuring your
                    building's integrity remains intact throughout the demolition process.
                  </p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Dust and Debris Management</h3>
                  <p>
                    Our professional containment systems minimize dust and debris spread throughout your property,
                    protecting unaffected areas and reducing post-demolition cleanup.
                  </p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Efficient Timeline</h3>
                  <p>
                    With our experienced crew and specialized equipment, we complete interior demolition efficiently,
                    allowing your renovation project to proceed on schedule.
                  </p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Proper Disposal</h3>
                  <p>
                    We handle all debris removal and disposal in compliance with local regulations, including recycling
                    materials whenever possible to reduce environmental impact.
                  </p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
                  <p>
                    Professional demolition helps avoid costly mistakes and damage that can occur with DIY approaches,
                    potentially saving you money on your overall renovation budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Do I need permits for interior demolition?</h3>
                  <p>
                    In most cases, yes. Permit requirements vary by location and project scope, but interior demolition
                    typically requires permits, especially when removing walls or making structural changes. Our team
                    can help you navigate the permitting process in Tampa and surrounding areas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">How do you minimize dust during interior demolition?</h3>
                  <p>
                    We implement comprehensive dust containment measures, including plastic sheeting barriers, negative
                    air pressure systems, and HEPA filtration. We also use specialized equipment with dust collection
                    features and wet demolition techniques when appropriate.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Can you work around occupied spaces?</h3>
                  <p>
                    Yes, we specialize in demolition projects in partially occupied buildings. We schedule work during
                    off-hours when possible, create effective containment systems, and implement noise reduction
                    strategies to minimize disruption to ongoing operations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">How long does interior selective demolition take?</h3>
                  <p>
                    Project timelines vary based on scope, complexity, and size. A single room renovation might take 1-2
                    days, while larger commercial projects could take several weeks. We provide detailed timelines
                    during the estimation process and work efficiently to meet project deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Interior Demolition Project?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact ALLIED Wrecking for a free consultation and quote on your interior selective demolition needs.
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
