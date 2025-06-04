import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Lock, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Staff Portal | Tafeed Technologies",
  description: "Access staff resources, webmail, and internal systems.",
}

export default function StaffPortalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6">Staff Portal</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Welcome to <span className="text-primary">Staff Portal</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access your webmail, staff resources, and internal systems. Choose your preferred access method below.
              </p>
            </div>
          </div>
        </section>

        {/* Portal Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Webmail Access */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Webmail Access</CardTitle>
                  <CardDescription>
                    Access your @tafeedtech.com email account directly through our webmail interface.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                    <li>• Check and send emails</li>
                    <li>• Manage contacts and calendar</li>
                    <li>• Access from anywhere</li>
                    <li>• Mobile-friendly interface</li>
                  </ul>
                  <Link href="/staff/webmail">
                    <Button size="lg" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Access Webmail
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Staff Login */}
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Staff Login</CardTitle>
                  <CardDescription>
                    Login to access internal systems, project management tools, and staff resources.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                    <li>• Project management dashboard</li>
                    <li>• Internal documentation</li>
                    <li>• Time tracking and reports</li>
                    <li>• Team collaboration tools</li>
                  </ul>
                  <Link href="/staff/login">
                    <Button size="lg" className="w-full" variant="outline">
                      <Lock className="mr-2 h-4 w-4" />
                      Staff Login
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Admin Access */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center p-8 border-2 border-primary/20">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Administrator Access</CardTitle>
                  <CardDescription>
                    Restricted access for system administrators and management personnel only.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                    <li>• User management and permissions</li>
                    <li>• System configuration</li>
                    <li>• Analytics and reporting</li>
                    <li>• Content management</li>
                  </ul>
                  <Link href="/admin/login">
                    <Button size="lg" className="w-full">
                      <Shield className="mr-2 h-4 w-4" />
                      Admin Login
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-8">
                If you're having trouble accessing your account or need technical support, contact our IT department.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="mailto:it@tafeedtech.com">
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Email IT Support
                  </Button>
                </Link>
                <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    WhatsApp Support
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
