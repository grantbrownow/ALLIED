import Link from "next/link"
import Image from "next/image"
// Import the Facebook icon
import { Mail, MapPin, Phone, ChevronRight, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-zinc-200 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary to-primary-600"></div>

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/allied-wrecking-logo.jpeg"
                alt="ALLIED Wrecking Logo"
                width={220}
                height={100}
                className="h-auto w-48 bg-white p-2 rounded-md"
              />
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              As the leading provider for many Tampa projects, ALLIED Wrecking LLC is a specialist Demolition company
              that knows everything about demolishing by being precise, time efficient, and cost effective.
            </p>
            <div className="inline-block bg-primary/20 text-primary font-bold px-4 py-2 rounded-md">
              Tampa's #1 Site Prep Demo
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              SERVICES
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Pool Demolition", href: "/services/pool-demolition" },
                { title: "Building Wrecking", href: "/services/building-wrecking" },
                { title: "Debris Hauling", href: "/services/debris-hauling" },
                { title: "Carport, Garage, or Shed Demo", href: "/services/carport-garage-shed" },
                { title: "Flood Damage Demolition", href: "/services/flood-damage" },
                { title: "Fire Damage Demolition", href: "/services/fire-damage" },
                { title: "Land Clearing", href: "/services/land-clearing" },
                { title: "Interior Selective Demolition", href: "/services/interior-selective-demolition" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              CONTACT
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-primary/20 rounded-full p-2 mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p>Tampa, Florida</p>
                  <p>1802 N. Howard</p>
                  <div className="flex gap-2 mt-1">
                    <Link
                      href="/tampa"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Tampa Services <ChevronRight className="h-3 w-3" />
                    </Link>
                    <Link
                      href="https://maps.google.com/?q=1802+N.+Howard+Tampa+Florida"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Get directions <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:8139572150" className="hover:text-primary transition-colors">
                  813.957.2150
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:kilroydemo@gmail.com" className="hover:text-primary transition-colors">
                  kilroydemo@gmail.com
                </a>
              </li>
              {/* Add the Facebook link to the CONTACT section */}
              {/* Find the CONTACT section's <ul> and add this as a new <li> after the email item: */}
              <li className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-2">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="https://www.facebook.com/alliedwrecking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              ADMIN
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { title: "CRM Login", href: "/crm-login" },
                { title: "Privacy Policy", href: "/privacy-policy" },
                { title: "Terms of Service", href: "/terms-of-service" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="container py-6 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} ALLIED Wrecking LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
