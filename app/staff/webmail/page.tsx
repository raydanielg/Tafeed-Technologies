import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Webmail Access | Tafeed Technologies",
  description: "Access your @tafeedtech.com email account through our webmail interface.",
}

export default function WebmailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-600/20 to-teal-600/20"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Badge className="mb-6">Webmail Access</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Access Your <span className="text-primary">Email</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access your @tafeedtech.com email account through our secure webmail interface. Check emails, manage
                contacts, and stay connected with your team.
              </p>
            </div>
          </div>
        </section>

        {/* Webmail Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Roundcube Webmail */}
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Roundcube Webmail</CardTitle>
                    <CardDescription>
                      Full-featured webmail client with modern interface and advanced features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                      <li>• Modern, responsive interface</li>
                      <li>• Advanced email management</li>
                      <li>• Contact and calendar integration</li>
                      <li>• Mobile-friendly design</li>
                      <li>• Drag & drop functionality</li>
                    </ul>
                    <a href="https://webmail.tafeedtech.com/roundcube" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Open Roundcube
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* SquirrelMail */}
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">SquirrelMail</CardTitle>
                    <CardDescription>Lightweight, fast webmail client perfect for quick email access.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                      <li>• Fast and lightweight</li>
                      <li>• Simple, clean interface</li>
                      <li>• Low bandwidth usage</li>
                      <li>• Quick email access</li>
                      <li>• Basic email features</li>
                    </ul>
                    <a href="https://webmail.tafeedtech.com/squirrelmail" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full" variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Open SquirrelMail
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Email Setup Instructions */}
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle>Email Client Setup</CardTitle>
                  <CardDescription>Configure your email client with these server settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium mb-4">Incoming Mail (IMAP)</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Server:</span>
                          <span className="font-mono">mail.tafeedtech.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Port:</span>
                          <span className="font-mono">993</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Security:</span>
                          <span className="font-mono">SSL/TLS</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Authentication:</span>
                          <span className="font-mono">Normal Password</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4">Outgoing Mail (SMTP)</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Server:</span>
                          <span className="font-mono">mail.tafeedtech.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Port:</span>
                          <span className="font-mono">465</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Security:</span>
                          <span className="font-mono">SSL/TLS</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Authentication:</span>
                          <span className="font-mono">Normal Password</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you're having trouble accessing your email or need assistance with setup, contact our IT support
                    team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="mailto:it@tafeedtech.com">
                      <Button variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Email IT Support
                      </Button>
                    </Link>
                    <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">WhatsApp Support</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <Link
                  href="/staff"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Staff Portal
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
