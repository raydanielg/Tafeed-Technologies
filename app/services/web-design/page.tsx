import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Palette, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Web Design & Development | Tafeed Technologies",
  description:
    "Professional web design and development services. Custom websites, e-commerce solutions, and web applications.",
}

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity and business goals.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Websites that look perfect on all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with lightning-fast loading times.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code following best practices.",
  },
]

const packages = [
  {
    name: "Starter Website",
    price: "$500",
    description: "Perfect for small businesses and personal websites",
    features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "1 month support"],
  },
  {
    name: "Business Website",
    price: "$1,200",
    description: "Ideal for growing businesses and organizations",
    features: [
      "Up to 15 pages",
      "Custom design",
      "CMS integration",
      "Advanced SEO",
      "E-commerce ready",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "$3,000+",
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced integrations",
      "Performance optimization",
      "Security features",
      "12 months support",
    ],
  },
]

export default function WebDesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Web Design & Development</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Beautiful <span className="text-primary">Websites</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create stunning, responsive websites that engage your audience and drive business growth. From simple
                landing pages to complex web applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Web Design Services?</h2>
              <p className="text-muted-foreground">
                We combine creativity with technical expertise to deliver websites that not only look amazing but also
                perform exceptionally.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
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

        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Web Design Packages</h2>
              <p className="text-muted-foreground">
                Choose the perfect package for your business needs. All packages include responsive design and basic
                SEO.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                  {pkg.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="https://wa.me/255742710054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-6 block"
                    >
                      <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Design Process</h2>
              <p className="text-muted-foreground">
                We follow a proven process to ensure your website meets your goals and exceeds expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We understand your business, goals, and target audience.",
                },
                { step: "02", title: "Design", description: "Create wireframes and visual designs for your approval." },
                { step: "03", title: "Development", description: "Build your website using the latest technologies." },
                { step: "04", title: "Launch", description: "Test, optimize, and launch your website successfully." },
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Build Your Website?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's create a website that represents your brand and drives results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Start Your Project
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
