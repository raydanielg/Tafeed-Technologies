"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "The Future of Web Development in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Ahmed Hassan",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    slug: "future-of-web-development-2024",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt:
      "Essential cybersecurity measures every small business should implement to protect against cyber threats and data breaches.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Fatima Ali",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Cybersecurity",
    slug: "cybersecurity-best-practices-small-businesses",
  },
  {
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt:
      "A comprehensive comparison of native and cross-platform mobile app development approaches to help you make the right choice.",
    image: "/placeholder.svg?height=200&width=400",
    author: "David Kimani",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Mobile Development",
    slug: "native-vs-cross-platform-mobile-development",
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Latest Insights & Articles</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest technology trends and insights from our expert team.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    {post.author}
                    <Calendar className="h-3 w-3 ml-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button>
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
