"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2, Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate WhatsApp message
    const message = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage: ${formState.message}`,
    )

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Open WhatsApp with the message
      window.open(`https://wa.me/255742710054?text=${message}`, "_blank")

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have questions or ready to start your project? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">We're available 24/7 to assist you</p>
            <div className="space-y-2">
              <p>+255 742 710 054</p>
              <p>+255 613 976 254</p>
            </div>
          </Card>

          <Card className="p-6 text-center flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Chat with us directly on WhatsApp</p>
            <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start Chat
              </Button>
            </Link>
          </Card>

          <Card className="p-6 text-center flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Send us an email anytime</p>
            <p>info@cybermac.com</p>
            <p>support@cybermac.com</p>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <h3 className="text-xl font-medium mb-4">Send us a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
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
                  <Label htmlFor="email">Email Address</Label>
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

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Message Sent! Opening WhatsApp...
                  </>
                ) : (
                  "Send Message via WhatsApp"
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By submitting this form, you'll be redirected to WhatsApp to complete your message.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
