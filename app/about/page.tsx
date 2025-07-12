import Image from "next/image"
import Link from "next/link"
import { Recycle, Award, Users, Truck, Leaf, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/commercial-demolition-aerial.png"
              alt="ALLIED Wrecking Commercial Demolition Site"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">About ALLIED Wrecking</h1>
              <p className="text-xl md:text-2xl">
                Tampa's #1 demolition contractor with a passion for turning "trash" into treasure.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  ALLIED Wrecking LLC is Tampa's premier demolition company, specializing in precise, time-efficient,
                  and cost-effective demolition services. For over 15 years, we've been clearing the way for tomorrow's
                  projects while maintaining a strong commitment to environmental responsibility.
                </p>
                <p className="text-lg mb-4">
                  What sets us apart is not just our expertise in tearing things down, but our passion for ensuring that
                  what we remove doesn't go to waste. We believe that demolition is not the end of a structure's life,
                  but the beginning of a new journey for its materials.
                </p>
                <p className="text-lg">
                  As Tampa's #1 Site Prep Demo contractor, we've built our reputation on reliability, quality, and a
                  forward-thinking approach to demolition that considers the full lifecycle of building materials.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/demolition-worker.png"
                  alt="ALLIED Wrecking professional demolition worker"
                  fill
                  className="object-cover object-top" // Added object-top to focus on the upper part of the image
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Passion for Recycling */}
        <section className="py-16 bg-zinc-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Passion for Recycling</h2>
              <p className="text-lg">
                At ALLIED Wrecking, we're passionate about finding new life for demolition materials. We don't just see
                debris—we see opportunity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-4 text-primary">
                  <Recycle size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Recycling Materials</h3>
                <p>
                  We recycle over 75% of demolition materials from our projects, including concrete, metal, wood, and
                  more. These materials are processed and transformed into new products, reducing landfill waste and
                  conserving natural resources.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-4 text-primary">
                  <Truck size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Repurposing</h3>
                <p>
                  We carefully salvage valuable components like fixtures, hardwood, architectural elements, and quality
                  building materials. These items find new homes in renovation projects, helping to preserve history
                  while reducing waste.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-4 text-primary">
                  <Leaf size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
                <p>
                  Our recycling efforts significantly reduce the carbon footprint of demolition projects. By diverting
                  materials from landfills and reducing the need for new raw materials, we're helping build a more
                  sustainable future.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">From "Trash" to Treasure</h3>
              <p className="text-lg mb-6">
                We've seen countless examples of demolition materials finding new life in creative and practical ways:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Concrete crushed and reused as road base or fill material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Vintage hardwood flooring restored for high-end residential projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Architectural elements preserved and featured in new construction</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Metal recycled into new building materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Brick and stone repurposed for landscaping and decorative features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Wood reclaimed for furniture, flooring, and architectural details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The ALLIED Wrecking Approach</h2>
              <p className="text-lg">
                Our comprehensive approach to demolition ensures that every project is completed safely, efficiently,
                and with minimal environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Before Demolition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Thorough site assessment and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Identification of recyclable and salvageable materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Proper permitting and regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Environmental hazard assessment and abatement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">During Demolition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Selective demolition to preserve valuable materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Careful sorting of materials for recycling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Dust and noise control measures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Safe and efficient operation of equipment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">After Demolition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Thorough site cleanup and preparation for next steps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Processing and distribution of recycled materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Documentation of material recycling for LEED projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Final inspection and project completion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Safety as our top priority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Environmental responsibility in all operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Transparent communication throughout the project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Continuous improvement in recycling practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-zinc-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose ALLIED Wrecking</h2>
              <p className="text-lg">
                When you work with ALLIED Wrecking, you're choosing a partner committed to excellence in every aspect of
                demolition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <p>
                  With over 15 years in the industry, we've successfully completed thousands of demolition projects
                  throughout Tampa and surrounding areas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p>
                  Our skilled professionals are trained in the latest demolition techniques, safety protocols, and
                  recycling practices to ensure optimal results.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Recycle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability Focus</h3>
                <p>
                  Our commitment to recycling and repurposing sets us apart, making us the choice for environmentally
                  conscious clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Demolition Project?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your residential or commercial project.
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
