import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Server, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Hosting Solutions | Tafeed Technologies",
  description:
    "Reliable web hosting services with 99.9% uptime guarantee. Shared, VPS, and dedicated hosting solutions.",
}

const hostingTypes = [
  {
    icon: Globe,
    title: "Shared Hosting",
    description: "Perfect for small websites and blogs with reliable performance.",
  },
  {
    icon: Server,
    title: "VPS Hosting",
    description: "Virtual private servers for growing businesses needing more control.",
  },
  {
    icon: Shield,
    title: "Dedicated Servers",
    description: "Full server resources for high-traffic websites and applications.",
  },
  {
    icon: Zap,
    title: "Cloud Hosting",
    description: "Scalable cloud infrastructure that grows with your business.",
  },
]

const plans = [
  {
    name: "Starter",
    price: "$10/month",
    description: "Perfect for personal websites and small blogs",
    features: ["10GB SSD Storage", "100GB Bandwidth", "1 Website", "Free SSL Certificate", "24/7 Support"],
  },
  {
    name: "Business",
    price: "$25/month",
    description: "Ideal for growing businesses and e-commerce",
    features: [
      "50GB SSD Storage",
      "Unlimited Bandwidth",
      "5 Websites",
      "Free SSL Certificate",
      "Daily Backups",
      "24/7 Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$75/month",
    description: "For high-traffic websites and applications",
    features: [
      "200GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Websites",
      "Free SSL Certificate",
      "Daily Backups",
      "Dedicated Support",
      "Advanced Security",
    ],
  },
]

export default function HostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Hosting Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Reliable <span className="text-primary">Web Hosting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fast, secure, and reliable hosting solutions with 99.9% uptime guarantee. From shared hosting to
                dedicated servers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Choose Your Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Get Free Migration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Types */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Hosting Solutions for Every Need</h2>
              <p className="text-muted-foreground">
                Choose from our range of hosting solutions designed to meet different requirements and budgets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostingTypes.map((type, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{type.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Hosting Plans & Pricing</h2>
              <p className="text-muted-foreground">
                Transparent pricing with no hidden fees. All plans include free SSL and 24/7 support.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                  {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
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
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Our Hosting?</h2>
                <ul className="space-y-4">
                  {[
                    "99.9% uptime guarantee with SLA",
                    "Lightning-fast SSD storage",
                    "Free SSL certificates for all domains",
                    "Daily automated backups",
                    "24/7 expert technical support",
                    "One-click app installations",
                    "Advanced security features",
                    "Free website migration service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Web Hosting Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Host Your Website?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get started with reliable hosting that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Choose Your Plan
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
