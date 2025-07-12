import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Phone, Clock, Award, Shield, Users, Zap } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BrandonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/commercial-demolition-aerial.png"
              alt="Brandon Demolition Services"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
                Best Demolition Service in Brandon
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Brandon's trusted demolition contractor with 15+ years of experience serving the greater Brandon area
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
                >
                  <Link href="/#quote-form" className="flex items-center gap-2">
                    GET FREE QUOTE
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black font-bold bg-transparent"
                >
                  <Link href="tel:8139572150" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    CALL NOW
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ALLIED Wrecking in Brandon */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">Why Choose ALLIED Wrecking in Brandon?</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                As Brandon's premier demolition contractor, we bring unmatched expertise, local knowledge, and 
                commitment to excellence to every project in the Brandon area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">15+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600">
                    Decades of expertise serving Brandon and surrounding communities with reliable demolition services.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Local Brandon Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600">
                    Based in Tampa with deep understanding of Brandon regulations, permits, and community needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600">
                    Fully licensed and insured for your peace of mind on every Brandon demolition project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">24/7 Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600">
                    Available around the clock for emergency demolition needs throughout Brandon and surrounding areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Brandon Demolition Services */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">Complete Demolition Services in Brandon</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                From residential homes to commercial buildings, we provide comprehensive demolition solutions 
                throughout the Brandon area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Residential Demolition</h3>
                <p className="text-zinc-600 mb-4">
                  Complete home demolition, pool removal, and site preparation for Brandon homeowners.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Single-family home demolition</li>
                  <li>• Multi-family residential projects</li>
                  <li>• Pool and deck removal</li>
                  <li>• Garage and shed demolition</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Commercial Demolition</h3>
                <p className="text-zinc-600 mb-4">
                  Large-scale commercial and industrial demolition projects throughout Brandon.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Office building demolition</li>
                  <li>• Retail space removal</li>
                  <li>• Industrial facility demolition</li>
                  <li>• Warehouse and storage demolition</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Emergency Demolition</h3>
                <p className="text-zinc-600 mb-4">
                  24/7 emergency demolition services for fire, storm, and accident damage.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Fire damage cleanup</li>
                  <li>• Storm damage removal</li>
                  <li>• Structural emergency response</li>
                  <li>• Hazardous material handling</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Selective Demolition</h3>
                <p className="text-zinc-600 mb-4">
                  Precise interior and partial demolition for renovation projects in Brandon.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Interior wall removal</li>
                  <li>• Kitchen and bathroom demolition</li>
                  <li>• Floor and ceiling removal</li>
                  <li>• Structural modifications</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Land Clearing</h3>
                <p className="text-zinc-600 mb-4">
                  Site preparation and land clearing services for new construction projects.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Tree and vegetation removal</li>
                  <li>• Site grading and preparation</li>
                  <li>• Foundation excavation</li>
                  <li>• Erosion control</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Debris Hauling</h3>
                <p className="text-zinc-600 mb-4">
                  Professional cleanup and debris removal services throughout Brandon.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Construction debris removal</li>
                  <li>• Material recycling</li>
                  <li>• Dumpster rental</li>
                  <li>• Site cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brandon Service Areas */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">Serving Brandon & Surrounding Areas</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                From downtown Brandon to the surrounding communities, we provide demolition services throughout 
                the entire Brandon metropolitan area.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "Brandon",
                "Valrico",
                "Riverview",
                "Lithia",
                "Fish Hawk",
                "Bloomingdale",
                "Seffner",
                "Mango",
                "Tampa",
                "Plant City",
                "Apollo Beach",
                "Wimauma",
                "Sun City Center",
                "Ruskin",
                "Gibsonton",
                "Dover",
                "Thonotosassa",
                "Temple Terrace",
                "Lutz",
                "Carrollwood",
                "Citrus Park",
                "Town N Country",
                "Westchase",
                "Oldsmar",
                "Safety Harbor",
                "Clearwater",
                "Largo",
                "Pinellas Park",
                "St. Petersburg",
                "Bradenton"
              ].map((area) => (
                <div key={area} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                  <p className="font-medium text-zinc-800">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brandon Demolition Process */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">Our Brandon Demolition Process</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                We follow a proven, systematic approach to ensure every Brandon demolition project is completed 
                safely, efficiently, and in compliance with local regulations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Free Consultation & Assessment</h3>
                  <p className="text-zinc-600">
                    We visit your Brandon property to assess the scope of work, identify potential challenges, 
                    and provide a detailed estimate for your demolition project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Permit Acquisition</h3>
                  <p className="text-zinc-600">
                    Our team handles all necessary Brandon demolition permits and ensures compliance with 
                    local regulations, including utility notifications and neighbor communications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Safety Preparation</h3>
                  <p className="text-zinc-600">
                    We establish safety perimeters, disconnect utilities, and implement dust control 
                    measures to protect your property and surrounding areas in Brandon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Demolition Execution</h3>
                  <p className="text-zinc-600">
                    Using specialized equipment and techniques, we carefully demolish the structure 
                    while maintaining safety standards and minimizing disruption to your Brandon neighborhood.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Debris Removal & Recycling</h3>
                  <p className="text-zinc-600">
                    We sort and remove all demolition materials, recycling what's possible and 
                    properly disposing of waste in accordance with Brandon's environmental regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Site Cleanup & Preparation</h3>
                  <p className="text-zinc-600">
                    Final site cleanup, grading, and preparation for your next phase, whether that's 
                    new construction, landscaping, or other development in Brandon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brandon Demolition Permits */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 font-heading">Brandon Demolition Permits & Regulations</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-zinc-600">
                  Understanding Brandon's demolition permit requirements is crucial for a successful project. 
                  Our team handles all permitting to ensure compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Required Permits in Brandon</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Demolition permit from Hillsborough County</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Utility disconnection permits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Tree removal permits (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Environmental assessment (if required)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Brandon-Specific Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hillsborough County building codes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Flood zone considerations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Neighbor notification requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Dust control and noise ordinances</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-800"></div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6 font-heading">
              Ready to Start Your Brandon Demolition Project?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact Brandon's trusted demolition contractor for a free consultation and quote on your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
              >
                <Link href="/#quote-form" className="flex items-center gap-2">
                  GET FREE QUOTE
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-bold bg-transparent"
              >
                <Link href="tel:8139572150" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  CALL NOW
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 