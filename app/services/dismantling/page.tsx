import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function DismantlingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/concrete-breaking.png"
              alt="Precision Dismantling Services"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Precision Dismantling Services</h1>
              <p className="text-xl md:text-2xl">
                Expert structural dismantling with minimal disruption to surrounding areas and maximum material
                recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Specialized Dismantling Solutions</h2>
                <p className="text-lg mb-4">
                  ALLIED Wrecking provides expert dismantling services for structures of all types and sizes. Unlike
                  traditional demolition, our dismantling approach involves the careful deconstruction of buildings and
                  structures, allowing for maximum material recovery and minimal environmental impact.
                </p>
                <p className="text-lg mb-4">
                  Our specialized dismantling services are ideal for projects where precision is paramount, such as:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Historic building partial dismantling</li>
                  <li>Selective structural removal</li>
                  <li>Interior structural modifications</li>
                  <li>Material salvage and recovery operations</li>
                  <li>Dismantling in confined or sensitive areas</li>
                  <li>Equipment and machinery removal</li>
                </ul>
                <p className="text-lg">
                  Our team utilizes specialized equipment and techniques to ensure each dismantling project is completed
                  safely, efficiently, and with minimal disruption to surrounding areas.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/demolition-team-planning.png"
                  alt="ALLIED Wrecking dismantling team planning"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Dismantling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Material Recovery</h3>
                <p>
                  Our dismantling process allows for maximum salvage and recycling of building materials, reducing
                  landfill waste and potentially offsetting project costs through material resale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Reduced Environmental Impact</h3>
                <p>
                  Careful dismantling minimizes dust, noise, and vibration, making it ideal for environmentally
                  sensitive areas or projects with strict environmental compliance requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Precision Control</h3>
                <p>
                  When only specific portions of a structure need to be removed, our dismantling services provide the
                  precision necessary to preserve the integrity of remaining elements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Safety Focus</h3>
                <p>
                  Our methodical approach to dismantling prioritizes safety at every stage, reducing risks associated
                  with traditional demolition methods, especially in occupied or adjacent buildings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Historical Preservation</h3>
                <p>
                  For historic structures, our dismantling techniques allow for the careful removal of specific elements
                  while preserving historically significant components for future restoration or reuse.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
                <p>
                  In many cases, selective dismantling can be more cost-effective than complete demolition, particularly
                  when considering material recovery value and reduced disposal costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Dismantling Process</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Assessment</h3>
                    <p>
                      We begin with a thorough structural evaluation to identify load-bearing elements, hazardous
                      materials, and salvageable components, creating a detailed dismantling plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safety Planning & Preparation</h3>
                    <p>
                      Our team develops comprehensive safety protocols, secures necessary permits, and implements
                      protective measures for workers and surrounding structures before work begins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Utility Disconnection & Hazard Removal</h3>
                    <p>
                      All utilities are properly disconnected, and hazardous materials like asbestos or lead paint are
                      safely removed following strict regulatory guidelines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Systematic Deconstruction</h3>
                    <p>
                      We dismantle the structure in the reverse order of construction, starting with interior finishes
                      and working outward to structural elements, ensuring stability throughout the process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Material Sorting & Recovery</h3>
                    <p>
                      Recovered materials are carefully sorted for recycling, reuse, or proper disposal, with detailed
                      documentation provided for LEED certification or environmental compliance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Site Restoration</h3>
                    <p>
                      Once dismantling is complete, we ensure the site is properly cleaned, graded, and prepared for its
                      next use according to project specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/loader-dumping-debris.png"
                  alt="ALLIED Wrecking specialized dismantling equipment"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Specialized Equipment & Expertise</h2>
                <p className="text-lg mb-4">
                  ALLIED Wrecking utilizes a comprehensive fleet of specialized equipment for precision dismantling
                  operations, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>High-reach excavators with specialized attachments</li>
                  <li>Mini-excavators for confined space work</li>
                  <li>Concrete cutting and coring equipment</li>
                  <li>Hydraulic breakers and crushers</li>
                  <li>Dust suppression systems</li>
                  <li>Material handling and sorting equipment</li>
                </ul>
                <p className="text-lg mb-4">
                  Our operators are highly trained in precision dismantling techniques, with extensive experience in
                  complex structural deconstruction projects. We maintain all equipment to the highest standards,
                  ensuring optimal performance and safety on every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What's the difference between dismantling and demolition?</h3>
                <p>
                  Dismantling involves the careful, systematic deconstruction of a structure with an emphasis on
                  material recovery and precision. Traditional demolition typically focuses on the complete removal of a
                  structure in the most efficient manner. Dismantling is often preferred when selective removal,
                  material salvage, or minimal disruption is required.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How long does a typical dismantling project take?</h3>
                <p>
                  Project timelines vary significantly based on structure size, complexity, material types, and recovery
                  goals. Dismantling generally takes longer than traditional demolition due to its methodical nature,
                  but this investment in time often yields benefits in material recovery, environmental impact, and
                  precision control. We provide detailed timeline estimates during the initial consultation.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Can you dismantle just a portion of my building?</h3>
                <p>
                  Yes, selective dismantling is one of our specialties. We can carefully remove specific portions of a
                  structure while preserving the integrity of the remaining elements. This is particularly valuable for
                  renovation projects, historic preservation work, or when only certain areas of a building need to be
                  modified.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What happens to the materials recovered during dismantling?</h3>
                <p>
                  Recovered materials are sorted and processed according to their type and condition. Valuable materials
                  like metals, hardwoods, architectural elements, and certain fixtures can often be resold or reused.
                  Other materials are recycled whenever possible. We provide detailed documentation of material recovery
                  and disposal for all projects.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Is dismantling more expensive than traditional demolition?</h3>
                <p>
                  The initial cost of dismantling is typically higher than traditional demolition due to the increased
                  labor and time involved. However, when considering the value of recovered materials, reduced disposal
                  costs, and potential environmental benefits, dismantling can be more cost-effective in the long run,
                  especially for projects with valuable salvageable materials or strict environmental requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Dismantling Project?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's leading dismantling specialists for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#quote-form">GET A FREE QUOTE</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/about">LEARN MORE ABOUT US</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
