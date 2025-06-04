"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Lock, Server, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Server,
    title: "Hosting Solutions",
    description:
      "Reliable and secure hosting services with 99.9% uptime guarantee, optimized for performance and scalability.",
    features: ["Cloud Hosting", "Dedicated Servers", "VPS Hosting", "Domain Registration"],
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from threats and ensure data integrity.",
    features: ["Security Audits", "Penetration Testing", "Firewall Configuration", "Data Encryption"],
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Custom website design and development services that create stunning, responsive, and user-friendly websites.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development for iOS and Android devices.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Custom database design, implementation, and management services for efficient data handling.",
    features: ["Database Design", "Data Migration", "Performance Optimization", "Backup Solutions"],
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business requirements and challenges.",
    features: ["Requirements Analysis", "Custom Development", "Integration Services", "Maintenance & Support"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technology Services</h2>
          <p className="text-muted-foreground">
            Cybermac Technologies offers a comprehensive range of IT services designed to help your business thrive in
            today's digital landscape. Explore our solutions below.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
