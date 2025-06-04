import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | Tafeed Technologies",
  description:
    "Stay updated with the latest technology trends, tips, and insights from our expert team at Tafeed Technologies.",
}

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
    tags: ["React", "AI", "PWA", "Trends"],
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
    tags: ["Security", "Business", "Protection", "Best Practices"],
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
    tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
    slug: "native-vs-cross-platform-mobile-development",
  },
  {
    title: "Cloud Migration: A Complete Guide for Businesses",
    excerpt:
      "Everything you need to know about migrating your business to the cloud, including benefits, challenges, and best practices.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Sarah Mwangi",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Migration", "AWS", "Business"],
    slug: "cloud-migration-complete-guide",
  },
  {
    title: "E-commerce Trends That Will Dominate 2024",
    excerpt:
      "Discover the emerging e-commerce trends that will shape online retail in 2024 and how businesses can adapt.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Ahmed Hassan",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "E-commerce",
    tags: ["E-commerce", "Trends", "Online Retail", "Business"],
    slug: "ecommerce-trends-2024",
  },
  {
    title: "Database Optimization Techniques for Better Performance",
    excerpt:
      "Learn advanced database optimization techniques to improve your application's performance and reduce query execution time.",
    image: "/placeholder.svg?height=200&width=400",
    author: "David Kimani",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Database",
    tags: ["Database", "Optimization", "Performance", "SQL"],
    slug: "database-optimization-techniques",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Cybersecurity",
  "Cloud Computing",
  "E-commerce",
  "Database",
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Tech <span className="text-primary">Insights & Updates</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with the latest technology trends, expert insights, and practical tips from our team of
                professionals.
              </p>
              <Link href="/blog/subscribe">
                <Button size="lg">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Featured Post</Badge>
                <h2 className="text-2xl font-bold">Latest from Our Blog</h2>
              </div>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <Badge variant="secondary">{blogPosts[0].category}</Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(blogPosts[0].date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {blogPosts[0].readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{blogPosts[0].title}</h3>
                      <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <User className="h-4 w-4" />
                        {blogPosts[0].author}
                      </div>
                    </div>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">All Articles</h2>
              <p className="text-muted-foreground">
                Browse through our collection of articles covering various technology topics and industry insights.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <User className="h-4 w-4" />
                      {post.author}
                      <Calendar className="h-4 w-4 ml-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and get the latest tech insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input rounded-md"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Need Expert Advice?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Our team of experts is ready to help you with your technology challenges and projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Consult Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  WhatsApp Chat
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
