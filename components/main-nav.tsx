"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navItems = [
  { title: "HOME", href: "/" },
  {
    title: "SERVICES",
    href: "/services",
    children: [
      { title: "Land Clearing", href: "/services/land-clearing" },
      { title: "Building Wrecking Services", href: "/services/building-wrecking" },
      { title: "Pool Demolition Services", href: "/services/pool-demolition" },
      { title: "Flood Damage Demo", href: "/services/flood-damage" },
      { title: "Fire Damage Demo", href: "/services/fire-damage" },
      { title: "Carport, Garage & Shed Demo", href: "/services/carport-garage-shed" },
      { title: "Debris Hauling", href: "/services/debris-hauling" },
    ],
  },
  { title: "REVIEWS", href: "/reviews" },
  { title: "ABOUT", href: "/about" },
  { title: "SITEPREPDEMO BLOG", href: "/blog" },
  { title: "CONTACT", href: "/contact" },
]

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="container">
      <div className="hidden md:flex h-12 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="font-medium">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{child.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium">{item.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between py-2">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
          <Link href="#quote-form">GET A QUOTE</Link>
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <React.Fragment key={item.title}>
                <Link
                  href={item.href}
                  className="px-2 py-1 font-medium hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-muted">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="px-2 py-1 text-sm hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
