import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-elevation-1 transition-all duration-500 hover:shadow-elevation-3 hover:-translate-y-1">
      <div className="absolute inset-0 z-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/75 group-hover:via-black/50 transition-colors duration-500"></div>
      </div>
      <div className="relative z-10 p-8 flex flex-col h-full min-h-[250px] text-white">
        <h3 className="text-2xl font-bold mb-3 text-gradient bg-gradient-to-r from-primary-300 to-primary">{title}</h3>
        <p className="mb-6 text-zinc-200">{description}</p>
        <div className="mt-auto">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 group bg-transparent"
          >
            <Link href={href} className="flex items-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
