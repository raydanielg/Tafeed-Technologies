"use client"
import Link from "next/link"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Tafeed Technologies offer?",
        answer:
          "We offer comprehensive technology solutions including web design & development, mobile app development, hosting solutions, cybersecurity services, custom software development, and database solutions.",
      },
      {
        question: "How long has Tafeed Technologies been in business?",
        answer:
          "Tafeed Technologies has been providing technology solutions for over 15 years, serving clients across East Africa and beyond.",
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer:
          "Yes, we work with businesses of all sizes, from startups and small businesses to large enterprises. We tailor our solutions to meet your specific needs and budget.",
      },
    ],
  },
  {
    category: "Web Development",
    questions: [
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes, we offer ongoing website maintenance and support services. This includes security updates, content updates, performance optimization, and technical support.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "All our websites are built with responsive design, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.",
      },
    ],
  },
  {
    category: "Mobile Apps",
    questions: [
      {
        question: "Do you develop for both iOS and Android?",
        answer:
          "Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter.",
      },
      {
        question: "How much does it cost to develop a mobile app?",
        answer:
          "Mobile app development costs vary based on features, complexity, and platform. Basic apps start from $800, while complex apps can cost $5,000+. Contact us for a detailed quote.",
      },
      {
        question: "Do you help with app store submission?",
        answer:
          "Yes, we assist with the entire app store submission process for both Apple App Store and Google Play Store, including preparing app descriptions, screenshots, and handling the approval process.",
      },
    ],
  },
  {
    category: "Hosting & Support",
    questions: [
      {
        question: "What is your uptime guarantee?",
        answer:
          "We provide a 99.9% uptime guarantee with our hosting services. Our infrastructure is monitored 24/7 to ensure maximum availability.",
      },
      {
        question: "Do you offer website migration services?",
        answer:
          "Yes, we provide free website migration services when you switch to our hosting. Our team will handle the entire migration process with minimal downtime.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 technical support via phone, email, and WhatsApp. Our support team is available to help with any technical issues or questions you may have.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How do you price your services?",
        answer:
          "Our pricing is based on project scope, complexity, and timeline. We provide transparent, fixed-price quotes with no hidden fees. Contact us for a detailed proposal.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including bank transfers, mobile money (M-Pesa, Airtel Money), and international wire transfers. Payment terms are typically 50% upfront and 50% upon completion.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, for larger projects, we can arrange flexible payment plans. We typically break payments into milestones based on project phases.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Frequently Asked Questions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Got <span className="text-primary">Questions?</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to the most commonly asked questions about our services, pricing, and processes.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Still Have Questions?
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-center">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`
                      const isOpen = openItems.includes(itemId)

                      return (
                        <Card key={faqIndex}>
                          <Collapsible>
                            <CollapsibleTrigger className="w-full" onClick={() => toggleItem(itemId)}>
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium text-left">{faq.question}</h3>
                                  {isOpen ? (
                                    <Minus className="h-5 w-5 text-primary shrink-0" />
                                  ) : (
                                    <Plus className="h-5 w-5 text-primary shrink-0" />
                                  )}
                                </div>
                              </CardContent>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <CardContent className="px-6 pb-6 pt-0">
                                <p className="text-muted-foreground">{faq.answer}</p>
                              </CardContent>
                            </CollapsibleContent>
                          </Collapsible>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    WhatsApp Chat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
