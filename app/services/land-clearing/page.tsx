import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function LandClearingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cleared-graded-lot.png"
              alt="Cleared and Graded Lot"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Land Clearing Services</h1>
              <p className="text-xl md:text-2xl">
                Professional land clearing services to prepare your property for development, construction, or
                landscaping.
              </p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Land Clearing Solutions</h2>
              <p className="text-lg mb-6">
                ALLIED Wrecking provides professional land clearing services for residential, commercial, and industrial
                properties throughout Tampa and surrounding areas. Whether you're preparing for new construction,
                expanding your property's usable space, or improving your landscape, our expert team has the equipment
                and expertise to clear your land efficiently and responsibly.
              </p>
              <p className="text-lg mb-6">
                We handle projects of all sizes, from small residential lots to large commercial acreage, with the same
                attention to detail and commitment to quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Land Clearing Services Include:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Vegetation Removal</h3>
                    <p>Complete removal of trees, shrubs, brush, and other vegetation from your property.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Stump Removal</h3>
                    <p>Extraction and disposal of tree stumps and root systems to prepare for construction.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Debris Removal</h3>
                    <p>Efficient hauling and disposal of all cleared materials, with recycling whenever possible.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Grading and Leveling</h3>
                    <p>Preparing the cleared land with proper grading for drainage and future construction.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Erosion Control</h3>
                    <p>Implementation of measures to prevent soil erosion during and after the clearing process.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Selective Clearing</h3>
                    <p>Precision removal of specific vegetation while preserving desired trees and plants.</p>
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
              <h2 className="text-3xl font-bold mb-6">Our Land Clearing Process</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Site Assessment</h3>
                  <p>
                    We begin with a thorough evaluation of your property to understand the scope of work, identify
                    potential challenges, and develop a customized clearing plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Planning and Permitting</h3>
                  <p>
                    Our team handles all necessary permits and ensures compliance with local regulations, including tree
                    removal permits and environmental considerations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Clearing Operations</h3>
                  <p>
                    Using specialized equipment and techniques, we efficiently clear vegetation, remove stumps, and
                    prepare the land according to your specifications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">4. Material Processing</h3>
                  <p>
                    We process cleared materials through recycling, mulching, or proper disposal methods, minimizing
                    landfill waste and environmental impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">5. Final Grading</h3>
                  <p>
                    Once clearing is complete, we grade the land to ensure proper drainage and prepare it for the next
                    phase of your project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">6. Site Cleanup</h3>
                  <p>
                    We leave your property clean and ready for construction or landscaping, with all debris removed and
                    erosion control measures in place if needed.
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
              <h2 className="text-3xl font-bold mb-6">Why Choose ALLIED Wrecking for Land Clearing</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Experienced Professionals:</span> Our team has cleared hundreds of
                    properties throughout Tampa and surrounding areas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Specialized Equipment:</span> We utilize modern machinery specifically
                    designed for efficient land clearing.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Environmental Responsibility:</span> We prioritize recycling and
                    sustainable practices in all our clearing operations.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Comprehensive Service:</span> From permitting to final cleanup, we
                    handle every aspect of your land clearing project.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold">Timely Completion:</span> We understand that time is money, and we work
                    efficiently to meet your project timeline.
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
                  <h3 className="text-xl font-bold mb-2">Do I need permits for land clearing in Tampa?</h3>
                  <p>
                    In most cases, yes. Tampa and surrounding municipalities typically require permits for land
                    clearing, especially when removing trees over a certain size. Our team handles all permitting
                    requirements as part of our service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How long does land clearing take?</h3>
                  <p>
                    The timeline varies depending on the size of the property, density of vegetation, and specific
                    requirements. Small residential lots may take 1-2 days, while larger properties can take a week or
                    more. We provide a detailed timeline during the initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What happens to all the cleared vegetation?</h3>
                  <p>
                    We recycle as much material as possible. Trees and brush are typically processed into mulch or
                    firewood, while stumps and roots are ground up. Any material that cannot be recycled is disposed of
                    properly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Can you clear land without disturbing specific trees?</h3>
                  <p>
                    Absolutely. We offer selective clearing services where we can work around trees or vegetation you
                    wish to preserve. This is common for properties where mature trees add value or where certain
                    species are protected.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What should I do to prepare for land clearing?</h3>
                  <p>
                    Before we arrive, ensure all personal property is removed from the area to be cleared. Mark any
                    trees or features you want to preserve, and make sure property boundaries are clearly identified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Clear Your Land?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your land clearing project.
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
