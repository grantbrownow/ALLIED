"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "HOME", href: "/" },
  {
    title: "SERVICES",
    href: "/services",
    children: [
      { title: "Land Clearing", href: "/services/land-clearing" },
      { title: "Building Wrecking", href: "/services/building-wrecking" },
      { title: "Dismantling", href: "/services/dismantling" },
      { title: "Pool Demolition", href: "/services/pool-demolition" },
      { title: "Interior Selective Demolition", href: "/services/interior-selective-demolition" },
      { title: "Flood Damage Demo", href: "/services/flood-damage" },
      { title: "Fire Damage Demo", href: "/services/fire-damage" },
      { title: "Carport, Garage & Shed Demo", href: "/services/carport-garage-shed" },
      { title: "Debris Hauling", href: "/services/debris-hauling" },
    ],
  },
  { title: "TAMPA", href: "/tampa" },
  { title: "REVIEWS", href: "/reviews" },
  { title: "ABOUT", href: "/about" },
  { title: "BLOG", href: "/blog" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-elevation-2" : "bg-white/95 backdrop-blur-sm",
      )}
    >
      {/* Top Bar with Contact Info */}
      <div className="bg-secondary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:8139572150"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
            >
              <span className="bg-primary/20 rounded-full p-1.5 group-hover:bg-primary/30 transition-colors">
                <Phone className="h-3 w-3 text-primary" />
              </span>
              813.957.2150
            </a>
            <a
              href="mailto:kilroydemo@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
            >
              <span className="bg-primary/20 rounded-full p-1.5 group-hover:bg-primary/30 transition-colors">
                <Mail className="h-3 w-3 text-primary" />
              </span>
              kilroydemo@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/tampa"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
            >
              <span className="bg-primary/20 rounded-full p-1.5 group-hover:bg-primary/30 transition-colors">
                <MapPin className="h-3 w-3 text-primary" />
              </span>
              1802 N. Howard, Tampa
            </Link>
            <a
              href="https://www.facebook.com/alliedwrecking/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
            >
              <span className="bg-primary/20 rounded-full p-1.5 group-hover:bg-primary/30 transition-colors">
                <Facebook className="h-3 w-3 text-primary" />
              </span>
              Follow us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-zinc-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center relative group">
              <div className="absolute -inset-2 bg-primary/10 scale-0 group-hover:scale-100 rounded-full transition-all duration-300"></div>
              <Image
                src="/allied-wrecking-logo.jpeg"
                alt="ALLIED Wrecking Logo"
                width={200}
                height={80}
                className="h-16 w-auto relative"
                priority
              />
            </Link>
            <div className="hidden md:block pl-4 border-l border-zinc-200">
              <div className="bg-gradient-to-r from-primary-600 to-primary text-black font-bold px-4 py-1.5 rounded-md text-sm shadow-sm">
                Tampa's #1 Site Prep Demo
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full bg-white shadow-elevation-2 rounded-md min-w-[220px] py-2 transition-all duration-200 transform origin-top",
                      activeDropdown === item.title
                        ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                        : "opacity-0 scale-95 pointer-events-none -translate-y-2",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.title}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-primary hover:bg-primary-600 text-black font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Link href="/#quote-form">GET A QUOTE</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-primary/10 scale-0 hover:scale-100 rounded-full transition-all duration-300"></div>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 animate-fade-in">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <div className="space-y-2">
                      <button
                        className="flex items-center justify-between w-full font-medium"
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            activeDropdown === item.title ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="pl-4 space-y-2 border-l-2 border-primary animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block py-1 text-sm hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 space-y-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-600 text-black font-bold shadow-sm transition-all duration-300"
              >
                <Link href="/#quote-form" onClick={() => setMobileMenuOpen(false)}>
                  GET A FREE QUOTE
                </Link>
              </Button>

              <div className="flex flex-col space-y-3 pt-4 border-t border-zinc-200">
                <a
                  href="tel:8139572150"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="bg-primary/10 rounded-full p-1.5 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  813.957.2150
                </a>
                <a
                  href="mailto:kilroydemo@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="bg-primary/10 rounded-full p-1.5 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </span>
                  kilroydemo@gmail.com
                </a>
                <Link
                  href="/tampa"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="bg-primary/10 rounded-full p-1.5 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </span>
                  1802 N. Howard, Tampa
                </Link>
                <a
                  href="https://www.facebook.com/alliedwrecking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="bg-primary/10 rounded-full p-1.5 group-hover:bg-primary/20 transition-colors">
                    <Facebook className="h-4 w-4 text-primary" />
                  </span>
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
