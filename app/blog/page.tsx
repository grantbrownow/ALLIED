import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    slug: "choosing-the-right-demolition-contractor",
    title: "Choosing the Right Demolition Contractor: What to Look For",
    excerpt:
      "Finding the right demolition contractor is crucial for your project's success. Learn the key factors to consider when hiring a demolition company in Tampa.",
    date: "May 2, 2025",
    readTime: "6 min read",
    image: "/blog-images/demolition-contractor.png",
    imageAlt: "Demolition contractor operating heavy machinery",
    featured: true,
  },
  {
    slug: "residential-vs-commercial-demolition",
    title: "Residential vs. Commercial Demolition: Understanding the Differences",
    excerpt:
      "Residential and commercial demolition projects require different approaches, equipment, and expertise. Learn about the key differences and why they matter.",
    date: "April 18, 2025",
    readTime: "5 min read",
    image: "/blog-images/residential-commercial-demolition.png",
    imageAlt: "Comparison of residential and commercial demolition sites",
  },
  {
    slug: "pool-removal-guide",
    title: "The Complete Guide to Pool Removal in Florida",
    excerpt:
      "Removing an unwanted swimming pool can increase your property value and eliminate maintenance costs. Discover the process, options, and considerations for pool demolition.",
    date: "April 5, 2025",
    readTime: "8 min read",
    image: "/blog-images/pool-demolition.png",
    imageAlt: "Swimming pool being demolished",
  },
  {
    slug: "demolition-permits-tampa",
    title: "Navigating Demolition Permits in Tampa: What You Need to Know",
    excerpt:
      "Understanding the permit requirements for demolition projects in Tampa is essential to avoid delays and penalties. Learn about the process, timeline, and documentation needed.",
    date: "March 22, 2025",
    readTime: "7 min read",
    image: "/blog-images/demolition-permits.png",
    imageAlt: "Construction permits and blueprints",
  },
  {
    slug: "eco-friendly-demolition-practices",
    title: "Eco-Friendly Demolition: Sustainable Practices for Modern Projects",
    excerpt:
      "Environmental considerations are increasingly important in demolition. Discover how modern demolition companies are implementing sustainable practices to reduce waste and environmental impact.",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "/blog-images/eco-friendly-demolition.png",
    imageAlt: "Sorted demolition materials for recycling",
  },
  {
    slug: "preparing-property-for-demolition",
    title: "How to Prepare Your Property for Demolition: A Checklist",
    excerpt:
      "Proper preparation before demolition begins can save time, money, and headaches. Follow our comprehensive checklist to ensure your property is ready for the demolition crew.",
    date: "February 28, 2025",
    readTime: "5 min read",
    image: "/blog-images/property-preparation.png",
    imageAlt: "Property being prepared for demolition",
  },
]

export default function BlogPage() {
  // Get the featured post
  const featuredPost = blogPosts.find((post) => post.featured)
  // Get the rest of the posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-zinc-100 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">SITEPREPDEMO BLOG</h1>
              <p className="text-lg text-zinc-600 mb-0">
                Expert insights, tips, and news about demolition, site preparation, and property transformation from
                Tampa's #1 demolition contractor.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    <p className="text-zinc-600 text-lg">{featuredPost.excerpt}</p>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-12 bg-zinc-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={
                        post.slug === "choosing-the-right-demolition-contractor"
                          ? "/demolition-team-planning.png"
                          : post.slug === "residential-vs-commercial-demolition"
                            ? "/commercial-demolition-aerial.png"
                            : post.slug === "pool-removal-guide"
                              ? "/cleared-graded-lot.png"
                              : post.slug === "demolition-permits-tampa"
                                ? "/demolition-site-machinery.png"
                                : post.slug === "eco-friendly-demolition-practices"
                                  ? "/loader-dumping-debris.png"
                                  : post.slug === "preparing-property-for-demolition"
                                    ? "/concrete-breaking.png"
                                    : "/placeholder.svg?height=400&width=600&query=construction demolition site with equipment"
                      }
                      alt={post.imageAlt || "Blog post thumbnail"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-zinc-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
