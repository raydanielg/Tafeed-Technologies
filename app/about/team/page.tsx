import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Team | Tafeed Technologies",
  description:
    "Meet the talented team behind Tafeed Technologies. Experienced professionals dedicated to your success.",
}

const teamMembers = [
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "15+ years of experience in technology leadership and business development.",
    expertise: ["Business Strategy", "Technology Leadership", "Client Relations"],
    email: "ahmed@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "sarah-mwangi",
    name: "Sarah Mwangi",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in software architecture and emerging technologies with 12+ years experience.",
    expertise: ["Software Architecture", "Cloud Computing", "Team Leadership"],
    email: "sarah@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "david-kimani",
    name: "David Kimani",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Full-stack developer with expertise in modern web technologies and mobile development.",
    expertise: ["React/Next.js", "Node.js", "Mobile Development"],
    email: "david@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "fatima-ali",
    name: "Fatima Ali",
    role: "Security Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Cybersecurity expert with certifications in ethical hacking and security auditing.",
    expertise: ["Cybersecurity", "Penetration Testing", "Security Auditing"],
    email: "fatima@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "james-mwangi",
    name: "James Mwangi",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creative designer focused on user experience and interface design.",
    expertise: ["UI/UX Design", "User Research", "Prototyping"],
    email: "james@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "grace-ochieng",
    name: "Grace Ochieng",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Experienced project manager ensuring timely delivery and client satisfaction.",
    expertise: ["Project Management", "Agile Methodology", "Client Communication"],
    email: "grace@tafeedtech.com",
    linkedin: "#",
    twitter: "#",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-green-600/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Our Team</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Meet Our <span className="text-primary">Expert Team</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our talented team of professionals brings together decades of experience in technology, design, and
                business to deliver exceptional results.
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

        {/* Team Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                        <Mail className="h-4 w-4" />
                      </Link>
                      <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link href={member.twitter} className="text-muted-foreground hover:text-primary">
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link href={`/about/team/${member.id}`} className="ml-auto">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/about/careers">
                <Button variant="secondary" size="lg">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact HR
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
