import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Lock, Server, Smartphone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Tafeed Technologies",
  description:
    "Comprehensive technology services including web design, mobile apps, hosting, cybersecurity, and custom software development.",
}

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Custom website design and development services that create stunning, responsive, and user-friendly websites.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "SEO Optimization",
      "Progressive Web Apps",
      "Website Maintenance",
    ],
    href: "/services/web-design",
    price: "Starting from $500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development for iOS and Android devices.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps",
      "App Store Optimization",
      "App Maintenance & Updates",
      "UI/UX Design",
    ],
    href: "/services/mobile-apps",
    price: "Starting from $800",
  },
  {
    icon: Server,
    title: "Hosting Solutions",
    description:
      "Reliable and secure hosting services with 99.9% uptime guarantee, optimized for performance and scalability.",
    features: [
      "Shared Hosting",
      "VPS Hosting",
      "Dedicated Servers",
      "Cloud Hosting",
      "Domain Registration",
      "SSL Certificates",
    ],
    href: "/services/hosting",
    price: "Starting from $10/month",
  },
  {
    icon: Lock,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your business from threats and ensure data integrity.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Firewall Configuration",
      "Data Encryption",
      "Security Training",
      "Incident Response",
    ],
    href: "/services/cybersecurity",
    price: "Starting from $300",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and challenges.",
    features: [
      "Requirements Analysis",
      "Custom Development",
      "System Integration",
      "API Development",
      "Software Testing",
      "Maintenance & Support",
    ],
    href: "/services/custom-software",
    price: "Starting from $1000",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Custom database design, implementation, and management services for efficient data handling.",
    features: [
      "Database Design",
      "Data Migration",
      "Performance Optimization",
      "Backup Solutions",
      "Data Analytics",
      "Database Security",
    ],
    href: "/services/database",
    price: "Starting from $400",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Our <span className="text-primary">Technology Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive technology solutions designed to help your business thrive in today's digital landscape.
                From web development to cybersecurity, we've got you covered.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={service.href} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                    <Link
                      href="https://wa.me/255742710054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full">Get Quote</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                We follow a proven methodology to ensure successful project delivery and client satisfaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We understand your business needs, goals, and requirements through detailed consultation.",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "We create a comprehensive project plan with timelines, milestones, and deliverables.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Our expert team develops your solution using the latest technologies and best practices.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "We deliver your project on time with ongoing support and maintenance services.",
                },
              ].map((process, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                  <CardTitle className="mb-2">{process.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us Today
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
