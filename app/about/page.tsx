import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedCounter from "@/components/animated-counter"

export const metadata: Metadata = {
  title: "About Us | Tafeed Technologies",
  description:
    "Learn about Tafeed Technologies - your trusted partner for innovative technology solutions in East Africa.",
}

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15+ years of experience in technology leadership and business development.",
  },
  {
    name: "Sarah Mwangi",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in software architecture and emerging technologies.",
  },
  {
    name: "David Kimani",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer with expertise in modern web technologies.",
  },
  {
    name: "Fatima Ali",
    role: "Security Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Cybersecurity expert with certifications in ethical hacking and security auditing.",
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our clients' success is our priority. We build lasting partnerships through exceptional service.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer support.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changing requirements and deliver solutions with speed and precision.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                About <span className="text-primary">Tafeed Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We are passionate about transforming businesses through innovative technology solutions. With over 15
                years of experience, we've helped hundreds of companies achieve their digital goals.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Work With Us
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
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={750} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={200} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={15} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={50} duration={2} />+
                </h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2008, Tafeed Technologies began as a small team of passionate developers with a vision to
                    bridge the digital divide in East Africa. What started as a web development company has evolved into
                    a comprehensive technology solutions provider.
                  </p>
                  <p>
                    Over the years, we've expanded our services to include mobile app development, cybersecurity,
                    hosting solutions, and custom software development. Our commitment to excellence and innovation has
                    earned us the trust of businesses across various industries.
                  </p>
                  <p>
                    Today, we're proud to be one of the leading technology companies in the region, with a team of 50+
                    professionals dedicated to helping businesses thrive in the digital age.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tafeed Technologies Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower businesses across East Africa with innovative technology solutions that drive growth,
                    efficiency, and digital transformation. We strive to make cutting-edge technology accessible and
                    affordable for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading technology partner in East Africa, recognized for our innovation, reliability, and
                    commitment to client success. We envision a future where every business has access to world-class
                    technology solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{value.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership Team</h2>
              <p className="text-muted-foreground">
                Our experienced leadership team brings together decades of expertise in technology and business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/about/team">
                <Button variant="outline">
                  View Full Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Tafeed Technologies?</h2>
                <ul className="space-y-4">
                  {[
                    "15+ years of proven experience in technology solutions",
                    "Team of certified professionals and industry experts",
                    "Comprehensive range of services under one roof",
                    "24/7 customer support and maintenance services",
                    "Competitive pricing with transparent project management",
                    "Strong track record with 99% client satisfaction rate",
                    "Local presence with global technology standards",
                    "Commitment to using latest technologies and best practices",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Why Choose Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss how we can help transform your business with our technology solutions.
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
                  Chat on WhatsApp
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
