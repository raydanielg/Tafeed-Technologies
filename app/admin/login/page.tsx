"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Shield, Mail, ArrowLeft, Loader2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate email domain
    if (!formData.email.endsWith("@tafeedtech.com")) {
      setError("Please use your @tafeedtech.com email address")
      setIsLoading(false)
      return
    }

    // Simulate authentication
    setTimeout(() => {
      // Mock authentication logic
      if (formData.email === "admin@tafeedtech.com" && formData.password === "admin123") {
        toast({
          title: "Admin login successful!",
          description: "Redirecting to admin dashboard...",
        })
        router.push("/admin/dashboard")
      } else {
        setError("Invalid admin credentials. Please try again.")
      }
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-600/20 to-yellow-600/20"></div>
          <div className="container relative z-10">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-red-100 text-red-800">Administrator Access</Badge>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Login</h1>
                <p className="text-muted-foreground">Restricted access for administrators only</p>
              </div>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Shield className="h-5 w-5" />
                    Administrator Login
                  </CardTitle>
                  <CardDescription>This area is restricted to authorized administrators only</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Admin Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="admin@tafeedtech.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Admin Password</Label>
                      <div className="relative">
                        <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter admin password"
                          value={formData.password}
                          onChange={handleChange}
                          className="pl-10 pr-10"
                          required
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-4 w-4" />
                          Admin Sign In
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 space-y-4">
                    <div className="text-center pt-4 border-t">
                      <Link
                        href="/staff"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Staff Portal
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Demo Credentials */}
              <Card className="mt-6 border-dashed border-red-200">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2 text-red-700">Demo Admin Credentials:</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      <strong>Email:</strong> admin@tafeedtech.com
                    </p>
                    <p>
                      <strong>Password:</strong> admin123
                    </p>
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
