import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Truck,
  TreePine,
  Waves,
  Flame,
  Wrench,
  Shield,
  Award,
  Users,
  Zap,
  Recycle,
  HardHat,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { HeroSlider } from "@/components/hero-slider"
import { CustomQuoteForm } from "@/components/custom-quote-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Building Wrecking",
    description: "Complete structural demolition for residential and commercial properties",
    icon: Building2,
    href: "/services/building-wrecking",
    image: "/demolition-project.png",
  },
  {
    title: "Debris Hauling",
    description: "Professional cleanup and debris removal services",
    icon: Truck,
    href: "/services/debris-hauling",
    image: "/debris-hauling-truck.png",
  },
  {
    title: "Land Clearing",
    description: "Site preparation and land clearing for new construction",
    icon: TreePine,
    href: "/services/land-clearing",
    image: "/cleared-graded-lot.png",
  },
  {
    title: "Pool Demolition",
    description: "Safe and efficient swimming pool removal and backfill",
    icon: Waves,
    href: "/services/pool-demolition",
    image: "/concrete-breaking.png",
  },
  {
    title: "Fire Damage Cleanup",
    description: "Emergency fire damage demolition and cleanup services",
    icon: Flame,
    href: "/services/fire-damage",
    image: "/night-excavator-work.png",
  },
  {
    title: "Interior Selective Demolition",
    description: "Precise interior demolition for renovations and remodeling",
    icon: Wrench,
    href: "/services/interior-selective-demolition",
    image: "/demolition-team-planning.png",
  },
]

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "24/7", label: "Emergency Service" },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Decades of expertise in demolition and site preparation",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled professionals committed to safety and quality",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Quick turnaround times without compromising quality",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Responsible disposal and recycling practices",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description: "Strict safety protocols on every job site",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Quote Form Section - Moved directly under hero */}
        <section id="quote-form" className="py-20 bg-gray-50 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 font-heading">GET A FREE QUOTE</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                  Please enter your information below for a timely response from our demolition experts.
                </p>
              </div>
              <CustomQuoteForm />
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-8 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/3 -translate-x-1/2 hidden md:block"></div>
        </section>

        {/* Improved Intro Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              {/* Company logo/icon could go here */}
              <div className="mb-8 flex items-center gap-4">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <h2 className="text-4xl font-bold font-heading">ALLIED Wrecking</h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="bg-gray-50 p-10 rounded-xl shadow-sm mb-10 text-center">
                <blockquote className="text-3xl italic font-medium mb-4 text-zinc-800">
                  "Every creation is first an act of destruction"
                </blockquote>
                <footer className="text-xl text-zinc-600">- Picasso</footer>
              </div>

              <p className="text-xl text-center text-zinc-600 mb-10">
                Tampa's premier demolition contractor, clearing the way for tomorrow.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
              >
                <Link href="#quote-form" className="flex items-center gap-2">
                  GET A FREE QUOTE
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 text-primary/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="12" y1="2" x2="12" y2="22"></line>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 text-primary/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">OUR SERVICES</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                You have found ALLIED WRECKING the right contractor to demolish and remove anything
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                />
              ))}
              <div className="flex items-center justify-center bg-gradient-to-br from-primary to-primary-600 text-black p-8 rounded-xl shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-3 hover:-translate-y-1">
                <Link
                  href="#quote-form"
                  className="text-xl font-bold flex items-center gap-3 hover:gap-4 transition-all duration-300"
                >
                  GET A QUICK QUOTE <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Why Choose Us Section (New) */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">WHY CHOOSE US</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                ALLIED Wrecking delivers excellence in every demolition project with our experienced team and commitment
                to quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-zinc-100 shadow-sm hover:shadow-elevation-2 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center font-heading">{item.title}</h3>
                  <p className="text-zinc-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">WHAT OUR CUSTOMERS SAY</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                We take pride in our work and our customers' satisfaction. Here's what some of our clients have to say
                about their experience with ALLIED Wrecking.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <TestimonialCarousel />

              <div className="text-center mt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
                >
                  <Link href="/reviews">READ ALL CUSTOMER REVIEWS</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-0 text-primary/5 transform rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="absolute bottom-20 left-0 text-primary/5 transform -rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
        </section>

        {/* CTA Section - Fixed SVG issues */}
        <section className="py-16 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-800"></div>

          {/* Fixed SVG background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="container relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6 font-heading">No Job Is Too Big or Too Small… We Do It All!</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Tampa's #1 Site Prep Demo - Trusted by homeowners and businesses throughout Central Florida
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-600 text-black font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-md"
            >
              <Link href="#quote-form" className="flex items-center gap-2">
                GET A FREE QUOTE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">Proudly Serving The Following Areas & Beyond</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                ALLIED Wrecking LLC Premium Demolition Services throughout Tampa Bay and Central Florida
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "Tampa",
                "Brandon",
                "Palmetto",
                "Carrollwood",
                "Lutz",
                "Temple Terrace",
                "Plant City",
                "Riverview",
                "Apollo Beach",
                "Wimauma",
                "Citrus Park",
                "Town N Country",
                "Lithia",
                "Ruskin",
                "Sun City Center",
                "Pinellas Park",
                "Largo",
                "Clearwater",
                "Anna Maria Island",
                "Terra Ceia",
                "Bradenton",
                "Ellenton",
                "Sarasota",
                "Land O' Lakes",
                "Zephyr Hills",
              ].map((area) => (
                <div key={area} className="text-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                  {area === "Tampa" ? (
                    <Link href="/tampa" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Brandon" ? (
                    <Link href="/brandon" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Palmetto" ? (
                    <Link href="/palmetto" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Carrollwood" ? (
                    <Link href="/carrollwood" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Lutz" ? (
                    <Link href="/lutz" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Temple Terrace" ? (
                    <Link href="/temple-terrace" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Plant City" ? (
                    <Link href="/plant-city" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Riverview" ? (
                    <Link href="/riverview" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Apollo Beach" ? (
                    <Link href="/apollo-beach" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Wimauma" ? (
                    <Link href="/wimauma" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Citrus Park" ? (
                    <Link href="/citrus-park" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Town N Country" ? (
                    <Link href="/town-n-country" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Lithia" ? (
                    <Link href="/lithia" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Ruskin" ? (
                    <Link href="/ruskin" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Sun City Center" ? (
                    <Link href="/sun-city-center" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Pinellas Park" ? (
                    <Link href="/pinellas-park" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Largo" ? (
                    <Link href="/largo" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Clearwater" ? (
                    <Link href="/clearwater" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Anna Maria Island" ? (
                    <Link href="/anna-maria-island" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Terra Ceia" ? (
                    <Link href="/terra-ceia" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Bradenton" ? (
                    <Link href="/bradenton" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Ellenton" ? (
                    <Link href="/ellenton" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Sarasota" ? (
                    <Link href="/sarasota" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Land O' Lakes" ? (
                    <Link href="/land-o-lakes" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : area === "Zephyr Hills" ? (
                    <Link href="/zephyr-hills" className="font-medium hover:text-primary transition-colors">
                      {area}
                    </Link>
                  ) : (
                    <p className="font-medium">{area}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading">STATS & FACTS</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Discover why ALLIED Wrecking is the go-to demolition contractor in Tampa Bay and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white rounded-lg shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Badge variant="outline" className="text-4xl font-bold mb-4">
                      {stat.number}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-xl font-bold mb-2">{stat.label}</CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
