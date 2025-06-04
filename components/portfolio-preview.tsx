"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description: "Complete online shopping solution with payment processing and inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    client: "RetailCorp Tanzania",
    link: "/portfolio/ecommerce-platform",
  },
  {
    title: "Banking Mobile App",
    description: "Secure mobile banking application with biometric authentication.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    client: "Community Bank",
    link: "/portfolio/banking-app",
  },
  {
    title: "Hospital Management System",
    description: "Complete hospital management solution with patient records and billing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Custom Software",
    client: "Muhimbili Hospital",
    link: "/portfolio/hospital-system",
  },
]

export default function PortfolioPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Recent Projects</h2>
          <p className="text-muted-foreground">
            Take a look at some of our recent work across different industries and technologies.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <p className="text-sm">
                    <span className="font-medium">Client:</span> {item.client}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href={item.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button>
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
