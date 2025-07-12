import Link from "next/link"
import { Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Stacy Burns",
    rating: 5,
    text: "Great value. Honest.",
  },
  {
    id: 2,
    name: "Karen Timoney",
    rating: 5,
    text: "After two other companies ghosted me, Kilroy called back right away. He studied my patio-porch teardown, asked for photos, gave a fair quote, and the crew kept everything spotless while they worked. Total professionals—highly recommend!",
  },
  {
    id: 3,
    name: "Roberta Hammond",
    rating: 5,
    text: "Mr. Kilroy came out, inspected, and quoted on the spot. His team tore down our dilapidated garage despite brutal heat, hauled everything off the next day, and kept me updated the whole time. Super-efficient.",
  },
  {
    id: 4,
    name: "Rodney Dhanraj",
    rating: 5,
    text: "Great value and prompt, professional service. Highly recommended!",
  },
  {
    id: 5,
    name: "Richard Warner",
    rating: 5,
    text: "Good value. Professional. Fast response.",
  },
  {
    id: 6,
    name: "Cheryl P.",
    rating: 5,
    text: "They demolished a house for me—legally ;-) Kilroy walked me through every step, pulled the permits, finished on time, and left the site clean. I'd hire them again in a heartbeat.",
  },
  {
    id: 8,
    name: "Collette Barrington",
    rating: 5,
    text: "I loved working with this team. They never once left me feeling ignored or unsure. Communication and friendliness were off the charts. I'd refer them to anyone!",
  },
  {
    id: 9,
    name: "Bert Carrier",
    rating: 5,
    text: "Good people who are easy to work with. Very responsive. Thanks!",
  },
  {
    id: 10,
    name: "Haley Patterson",
    rating: 5,
    text: "Kind man, spoke very well of what he's able to do.",
  },
  {
    id: 11,
    name: "Deiondre Coughlan",
    rating: 5,
    text: "This company cleaned my house twice, organized my garage, and hauled everything off. Great job at affordable prices!",
  },
  {
    id: 12,
    name: "Reggie Johnson",
    rating: 5,
    text: "If I could give six stars I would—goes above and beyond with communication, performance, and price. Save time and money with Allied Wrecking.",
  },
  {
    id: 13,
    name: "W. J. Kilroy",
    rating: 5,
    text: "Real pro, polite, fast response, performance.",
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-zinc-100 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h1>
              <p className="text-lg text-zinc-600">
                Don't just take our word for it. See what our satisfied customers have to say about ALLIED Wrecking's
                demolition services in Tampa and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="mb-4">
                    <p className="text-zinc-700">{review.text}</p>
                  </blockquote>
                  <footer className="font-medium text-zinc-900">— {review.name}</footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Stats */}
        <section className="py-12 bg-zinc-100">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-lg font-medium">Satisfied Customers</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <p className="text-lg font-medium">Average Rating</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-lg font-medium">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Award-Winning Service?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Join our long list of satisfied customers. Contact Tampa's #1 demolition contractor for a free quote on
              your residential or commercial project.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-6 text-base font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link href="/#quote-form">
                <span>Get a Free Quote</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
