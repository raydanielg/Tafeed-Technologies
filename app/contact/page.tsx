"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, Loader2, Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

const services = [
  "Web Design & Development",
  "Mobile App Development",
  "Hosting Solutions",
  "Cybersecurity Services",
  "Custom Software Development",
  "Database Solutions",
  "Digital Marketing",
  "IT Consulting",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate WhatsApp message
    const message = encodeURIComponent(
      `New Contact Form Submission:\n\n` +
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n` +
        `Phone: ${formState.phone}\n` +
        `Company: ${formState.company}\n` +
        `Service: ${formState.service}\n` +
        `Budget: ${formState.budget}\n\n` +
        `Message: ${formState.message}\n\n` +
        `Newsletter: ${formState.newsletter ? "Yes" : "No"}`,
    )

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Open WhatsApp with the message
      window.open(`https://wa.me/255742710054?text=${message}`, "_blank")

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
          newsletter: false,
        })
      }, 3000)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to start your project? Have questions about our services? We're here to help. Contact us today and
                let's discuss how we can bring your ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Call Us</CardTitle>
                <CardDescription className="mb-4">Available 24/7 for urgent matters</CardDescription>
                <div className="space-y-1 text-sm">
                  <p>+255 742 710 054</p>
                  <p>+255 613 976 254</p>
                </div>
              </Card>

              <Card className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Email Us</CardTitle>
                <CardDescription className="mb-4">We'll respond within 24 hours</CardDescription>
                <div className="space-y-1 text-sm">
                  <p>info@tafeedtech.com</p>
                  <p>support@tafeedtech.com</p>
                </div>
              </Card>

              <Card className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2">WhatsApp</CardTitle>
                <CardDescription className="mb-4">Chat with us instantly</CardDescription>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </Link>
              </Card>

              <Card className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Visit Us</CardTitle>
                <CardDescription className="mb-4">Our office location</CardDescription>
                <p className="text-sm">Dar es Salaam, Tanzania</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+255 XXX XXX XXX"
                          value={formState.phone}
                          onChange={handleChange}
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formState.company}
                          onChange={handleChange}
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("service", value)}
                          disabled={isSubmitting || isSubmitted}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("budget", value)}
                          disabled={isSubmitting || isSubmitted}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                            <SelectItem value="over-25000">Over $25,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formState.newsletter}
                        onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, newsletter: !!checked }))}
                        disabled={isSubmitting || isSubmitted}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for tech updates and tips
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isSubmitted}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Message Sent! Opening WhatsApp...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      By submitting this form, you'll be redirected to WhatsApp to complete your message.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Support Only</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        24/7 emergency support available for critical issues
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Tafeed Technologies?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">15+ years of industry experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">750+ successful projects completed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">99% client satisfaction rate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">24/7 customer support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">Competitive pricing with no hidden costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">Latest technologies and best practices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Response Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span className="text-sm">WhatsApp: Instant response</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">Email: Within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">Phone: Same day callback</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Located in the heart of Dar es Salaam, we're easily accessible and ready to meet with you in person.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Tafeed Technologies Office</h3>
                      <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
                      <p className="text-sm text-muted-foreground mt-2">Interactive map will be integrated here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
