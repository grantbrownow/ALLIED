import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Land Clearing",
    description:
      "Professional land clearing services to prepare your property for development, construction, or landscaping.",
    href: "/services/land-clearing",
  },
  {
    title: "Building Wrecking",
    description: "Professional, safe, and efficient demolition services for structures of all sizes.",
    href: "/services/building-wrecking",
  },
  {
    title: "Dismantling",
    description: "Expert structural dismantling with minimal disruption and maximum material recovery.",
    href: "/services/dismantling",
  },
  {
    title: "Pool Demolition",
    description: "Expert swimming pool removal services to reclaim your yard space and eliminate maintenance costs.",
    href: "/services/pool-demolition",
  },
  {
    title: "Interior Selective Demolition",
    description: "Precision interior demolition services for renovations, remodels, and commercial buildouts.",
    href: "/services/interior-selective-demolition",
  },
  {
    title: "Flood Damage Demo",
    description: "Specialized demolition services for properties damaged by flooding and water intrusion.",
    href: "/services/flood-damage",
  },
  {
    title: "Fire Damage Demo",
    description: "Specialized demolition services for properties damaged by fire and smoke.",
    href: "/services/fire-damage",
  },
  {
    title: "Carport, Garage & Shed Demo",
    description: "Professional removal of outdoor structures to clear space for new projects or improvements.",
    href: "/services/carport-garage-shed",
  },
  {
    title: "Debris Hauling",
    description: "Professional removal and disposal of construction debris, demolition waste, and unwanted materials.",
    href: "/services/debris-hauling",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/night-excavator-work.png"
              alt="Night Excavation Work"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl">
                Professional demolition and site preparation services for residential and commercial projects.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Comprehensive Demolition Services</h2>
              <p className="text-lg">
                ALLIED Wrecking provides a full range of demolition and site preparation services throughout Tampa and
                surrounding areas. Whether you need a complete building demolition, selective interior removal, or
                specialized services like pool removal or fire damage cleanup, our experienced team has the expertise
                and equipment to handle your project safely and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.href} className="bg-zinc-50 rounded-lg border p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-4 text-zinc-600">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose ALLIED Wrecking</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Experience & Expertise</h3>
                  <p>
                    With over 15 years in the industry, we've successfully completed thousands of demolition projects
                    throughout Tampa and surrounding areas. Our team has the knowledge and skills to handle projects of
                    any size or complexity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Safety First Approach</h3>
                  <p>
                    We maintain rigorous safety protocols to protect our workers, your property, and surrounding areas.
                    Our team is trained in the latest safety practices and equipped with proper protective equipment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
                  <p>
                    We're passionate about recycling and minimizing landfill waste. Our commitment to sustainable
                    practices means we typically recycle over 75% of demolition materials from our projects.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Fully Licensed & Insured</h3>
                  <p>
                    We carry comprehensive insurance coverage and all necessary licenses for demolition work in Florida,
                    giving you peace of mind throughout your project.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
                  <p>
                    We utilize specialized demolition machinery that enables efficient, precise, and safe demolition
                    while minimizing impact on surrounding properties.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">Turnkey Service</h3>
                  <p>
                    From permitting to final cleanup, we handle every aspect of your demolition project, making the
                    process stress-free and straightforward for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Process</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p>
                      We begin with a thorough discussion of your project needs, goals, and timeline to understand
                      exactly what you're looking to accomplish.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Site Assessment</h3>
                    <p>
                      Our team conducts a detailed on-site evaluation to identify potential challenges, develop a
                      strategic plan, and provide an accurate quote.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Permitting & Compliance</h3>
                    <p>
                      We handle all necessary permits and ensure compliance with local regulations, including utility
                      disconnections and environmental requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Project Execution</h3>
                    <p>
                      Using appropriate equipment and techniques, we carefully execute the demolition while implementing
                      safety measures and minimizing disruption.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Material Recycling</h3>
                    <p>
                      We sort demolition materials for maximum recycling, diverting as much as possible from landfills
                      and processing materials responsibly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Site Cleanup & Preparation</h3>
                    <p>
                      After demolition, we thoroughly clean the site and prepare it for its next use, whether that's new
                      construction or landscaping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
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
