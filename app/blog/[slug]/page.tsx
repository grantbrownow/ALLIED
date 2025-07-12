import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { BlogContent } from "@/components/blog-content"

// Blog post data
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
    content: "choosing-the-right-demolition-contractor",
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
    content: "residential-vs-commercial-demolition",
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
    content: "pool-removal-guide",
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
    content: "demolition-permits-tampa",
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
    content: "eco-friendly-demolition-practices",
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
    content: "preparing-property-for-demolition",
  },
]

// Get related posts (excluding the current post)
function getRelatedPosts(currentSlug: string) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 3)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-zinc-100 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src={
                  post.slug === "choosing-the-right-demolition-contractor"
                    ? "/demolition-team-planning.png"
                    : post.slug === "residential-vs-commercial-demolition"
                      ? "/commercial-demolition-aerial.png"
                      : post.slug === "pool-removal-guide"
                        ? "/real-demolition-3.webp"
                        : post.slug === "demolition-permits-tampa"
                          ? "/real-demolition-1.webp"
                          : post.slug === "eco-friendly-demolition-practices"
                            ? "/loader-dumping-debris.png"
                            : post.slug === "preparing-property-for-demolition"
                              ? "/before-after-demolition.png"
                              : post.image || "/placeholder.svg"
                }
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <BlogContent contentKey={post.content} />

            {/* Share Links */}
            <div className="mt-12 pt-6 border-t">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Share this article</h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title,
                      )}&url=${encodeURIComponent(`https://alliedwrecking.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://alliedwrecking.com/blog/${post.slug}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        `https://alliedwrecking.com/blog/${post.slug}`,
                      )}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(
                        `Check out this article: https://alliedwrecking.com/blog/${post.slug}`,
                      )}`}
                      aria-label="Share via Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="py-12 bg-zinc-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">{relatedPost.title}</h3>
                    <p className="text-zinc-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${relatedPost.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-zinc-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Demolition Project?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact Tampa's #1 demolition contractor for a free quote on your residential or commercial project.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#quote-form">GET A FREE QUOTE</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
