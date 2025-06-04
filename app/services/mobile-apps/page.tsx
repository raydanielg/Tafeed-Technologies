import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, Apple, SmartphoneIcon as Android, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Mobile App Development | Tafeed Technologies",
  description: "Professional mobile app development for iOS and Android. Native and cross-platform solutions.",
}

const platforms = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps using Swift and Objective-C for optimal performance.",
  },
  {
    icon: Android,
    title: "Android Development",
    description: "Native Android apps using Kotlin and Java for Google Play Store.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "React Native and Flutter apps that work on both platforms.",
  },
  {
    icon: Zap,
    title: "Progressive Web Apps",
    description: "Web apps that feel like native mobile applications.",
  },
]

export default function MobileAppsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Mobile App Development</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Build Amazing <span className="text-primary">Mobile Apps</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create powerful mobile applications for iOS and Android that engage users and drive business growth.
                From concept to App Store.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Start Your App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Mobile App Platforms</h2>
              <p className="text-muted-foreground">
                We develop apps for all major platforms using the latest technologies and best practices.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{platform.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Our Mobile App Development?</h2>
                <ul className="space-y-4">
                  {[
                    "Native and cross-platform development expertise",
                    "User-centered design and intuitive interfaces",
                    "Performance optimization and security",
                    "App Store submission and approval support",
                    "Ongoing maintenance and updates",
                    "Integration with backend systems and APIs",
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
                  alt="Mobile App Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's turn your app idea into reality with our expert mobile development team.
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
