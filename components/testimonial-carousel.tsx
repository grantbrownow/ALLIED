"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Replace the testimonial items array to remove avatar properties
const featuredReviews = [
  {
    id: 1,
    name: "Karen Timoney",
    rating: 5,
    text: "After two other companies ghosted me, Kilroy called back right away. He studied my patio-porch teardown, asked for photos, gave a fair quote, and the crew kept everything spotless while they worked. Total professionals—highly recommend!",
  },
  {
    id: 2,
    name: "Roberta Hammond",
    rating: 5,
    text: "Mr. Kilroy came out, inspected, and quoted on the spot. His team tore down our dilapidated garage despite brutal heat, hauled everything off the next day, and kept me updated the whole time. Super-efficient.",
  },
  {
    id: 3,
    name: "Reggie Johnson",
    rating: 5,
    text: "If I could give six stars I would—goes above and beyond with communication, performance, and price. Save time and money with Allied Wrecking.",
  },
  {
    id: 4,
    name: "Collette Barrington",
    rating: 5,
    text: "I loved working with this team. They never once left me feeling ignored or unsure. Communication and friendliness were off the charts. I'd refer them to anyone!",
  },
  {
    id: 5,
    name: "Cheryl P.",
    rating: 5,
    text: "They demolished a house for me—legally ;-) Kilroy walked me through every step, pulled the permits, finished on time, and left the site clean. I'd hire them again in a heartbeat.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredReviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredReviews.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredReviews.length)
  }

  return (
    <div className="relative py-16 px-8 md:px-12 bg-white rounded-2xl overflow-hidden shadow-elevation-1 border border-zinc-100">
      {/* Background decorative elements */}
      <div className="absolute top-6 left-6 text-primary/10">
        <Quote size={120} className="fill-primary/5" />
      </div>
      <div className="absolute bottom-6 right-6 text-primary/10 transform rotate-180">
        <Quote size={120} className="fill-primary/5" />
      </div>

      <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-primary text-primary drop-shadow-sm" />
            ))}
          </div>
        </div>

        {/* Replace the testimonial rendering section to remove avatar display */}
        <div className="relative min-h-[220px] md:min-h-[180px]">
          {featuredReviews.map((review, index) => (
            <div
              key={review.id}
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-700",
                index === currentIndex
                  ? "opacity-100 z-10 translate-x-0"
                  : index < currentIndex
                    ? "opacity-0 z-0 -translate-x-full"
                    : "opacity-0 z-0 translate-x-full",
              )}
            >
              <div className="flex flex-col items-center">
                <blockquote className="text-center mb-8 max-w-2xl">
                  <p className="text-xl md:text-2xl text-zinc-700 italic leading-relaxed">"{review.text}"</p>
                </blockquote>
                <footer className="text-center font-medium text-zinc-900 text-xl font-heading">— {review.name}</footer>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-3">
          {featuredReviews.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-primary scale-125 shadow-sm" : "bg-zinc-300 hover:bg-zinc-400",
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Make sure the navigation buttons are more visible and properly positioned */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-elevation-1 z-20 border-zinc-200 hover:bg-primary/10 hover:border-primary transition-colors"
          onClick={goToPrevious}
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-elevation-1 z-20 border-zinc-200 hover:bg-primary/10 hover:border-primary transition-colors"
          onClick={goToNext}
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
