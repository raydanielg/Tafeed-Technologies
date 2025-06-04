"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Makamba",
    position: "CEO, TechStart Ltd",
    company: "TechStart Ltd",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Tafeed Technologies transformed our business with their innovative web solutions. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Kimani",
    position: "Marketing Director",
    company: "Retail Solutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Tafeed was a game-changer for our e-commerce platform. Their attention to detail and technical expertise helped us increase our online sales by 200% in just six months.",
    rating: 5,
  },
  {
    name: "Michael Ochieng",
    position: "IT Manager",
    company: "Community Bank",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The mobile banking app developed by Tafeed Technologies has received outstanding feedback from our customers. Their team's security expertise and user-focused design approach made all the difference.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    position: "Operations Director",
    company: "Logistics Pro",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Tafeed's custom logistics software streamlined our operations and reduced costs by 30%. Their ongoing support and maintenance have been exceptional. A truly reliable technology partner.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with Tafeed Technologies.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/testimonials">
            <Button variant="outline">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
