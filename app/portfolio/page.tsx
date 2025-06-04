import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink, Globe, Smartphone, Server, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio | Tafeed Technologies",
  description:
    "Explore our portfolio of successful projects including web applications, mobile apps, and enterprise solutions.",
}

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "RetailCorp Tanzania",
    year: "2024",
    icon: Globe,
    link: "#",
  },
  {
    title: "Banking Mobile App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transaction processing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Biometric Auth"],
    client: "Community Bank",
    year: "2024",
    icon: Smartphone,
    link: "#",
  },
  {
    title: "Hospital Management System",
    description: "Complete hospital management solution with patient records, appointment scheduling, and billing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Custom Software",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    client: "Muhimbili Hospital",
    year: "2023",
    icon: Code,
    link: "#",
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Scalable cloud infrastructure with load balancing, auto-scaling, and disaster recovery.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cloud Solutions",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    client: "TechStart Ltd",
    year: "2023",
    icon: Server,
    link: "#",
  },
  {
    title: "Educational Platform",
    description: "Online learning platform with video streaming, interactive quizzes, and progress tracking.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    technologies: ["Next.js", "PostgreSQL", "Redis", "WebRTC"],
    client: "EduTech Africa",
    year: "2023",
    icon: Globe,
    link: "#",
  },
  {
    title: "Logistics Mobile App",
    description: "Real-time package tracking and delivery management system with GPS integration.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    technologies: ["Flutter", "Google Maps", "Firebase", "Push Notifications"],
    client: "Swift Logistics",
    year: "2022",
    icon: Smartphone,
    link: "#",
  },
]

const categories = ["All", "Web Development", "Mobile App", "Custom Software", "Cloud Solutions"]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our successful projects and see how we've helped businesses across various industries achieve
                their digital transformation goals.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">750+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">
                Here are some of our recent projects that showcase our expertise across different technologies and
                industries.
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
              {portfolioItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-1">Client:</p>
                        <p className="text-sm text-muted-foreground">{item.client}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Link
                      href="https://wa.me/255742710054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        Similar Project
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground">
                We have experience working with clients across various industries, delivering tailored solutions for
                each sector.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                "Healthcare",
                "Education",
                "Finance & Banking",
                "E-commerce",
                "Manufacturing",
                "Real Estate",
                "Transportation",
                "Government",
                "Non-Profit",
                "Entertainment",
              ].map((industry, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <p className="font-medium">{industry}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get Started Today
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
