import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Lock,
  MessageSquare,
  Server,
  Smartphone,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import QuoteCalculator from "@/components/quote-calculator"
import NewsletterForm from "@/components/newsletter-form"
import ContactSection from "@/components/contact-section"
import AnimatedCounter from "@/components/animated-counter"
import TestimonialsSection from "@/components/testimonials-section"
import PortfolioPreview from "@/components/portfolio-preview"
import BlogPreview from "@/components/blog-preview"

export const metadata: Metadata = {
  title: "Tafeed Technologies | Tech Services Provider",
  description:
    "Professional hosting, cybersecurity, web design, and mobile app development services by Tafeed Technologies.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section id="stats" className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={750} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={99} duration={2} />%
                </h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={15} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={24} duration={2} />
                  /7
                </h3>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section id="why-choose-us" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Tafeed Technologies?</h2>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with exceptional service to deliver solutions that drive your
                business forward.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Award-Winning Team",
                  description: "Recognized experts in technology solutions with industry certifications.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Delivery",
                  description: "Quick turnaround times without compromising on quality.",
                },
                {
                  icon: Users,
                  title: "Dedicated Support",
                  description: "24/7 customer support with dedicated account managers.",
                },
                {
                  icon: Star,
                  title: "5-Star Reviews",
                  description: "Consistently rated 5 stars by our satisfied clients.",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <PortfolioPreview />
        <TestimonialsSection />

        <section id="about-preview" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">About Tafeed Technologies</h2>
                <p className="text-muted-foreground mb-6">
                  Tafeed Technologies is a leading provider of comprehensive technology solutions in East Africa. With
                  over 15 years of experience, we've helped hundreds of businesses transform their digital presence and
                  achieve their goals through innovative technology solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Expert team with 15+ years of industry experience",
                    "Customized solutions for businesses of all sizes",
                    "Commitment to using the latest technologies",
                    "Dedicated support and maintenance services",
                    "Transparent pricing and project management",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about">
                  <Button>
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 z-10 rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tafeed Technologies Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <BlogPreview />

        <section id="calculator" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get an Instant Quote</h2>
              <p className="text-muted-foreground">
                Use our interactive calculator to get an estimate for your project. Select the services you need, and
                we'll provide you with a quick quote. Connect directly via WhatsApp for a detailed discussion.
              </p>
            </div>
            <QuoteCalculator />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Digital Presence?</h2>
                <p className="mb-6 text-primary-foreground/90">
                  Join hundreds of satisfied clients who have elevated their businesses with our technology solutions.
                  From startups to enterprises, we have the expertise to help you succeed in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Server, title: "99.9% Uptime" },
                  { icon: Lock, title: "Enterprise Security" },
                  { icon: Code, title: "Clean Code" },
                  { icon: Smartphone, title: "Mobile Optimized" },
                ].map((item, i) => (
                  <Card key={i} className="bg-primary-foreground/10 border-primary-foreground/20">
                    <CardHeader>
                      <item.icon className="h-8 w-8 mb-2" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
