"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, UserPlus, Mail, ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

const departments = ["Development", "Design", "Marketing", "Sales", "Support", "Administration", "Management"]

export default function StaffSignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    reason: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate email domain
    if (!formData.email.endsWith("@tafeedtech.com")) {
      setError("Please use a @tafeedtech.com email address")
      setIsLoading(false)
      return
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      setIsLoading(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Application submitted!",
        description: "Your account request has been sent for admin approval.",
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
            <div className="container relative z-10">
              <div className="max-w-md mx-auto text-center">
                <Card>
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Application Submitted!</h1>
                    <p className="text-muted-foreground mb-6">
                      Your staff account request has been submitted successfully. An administrator will review your
                      application and contact you within 24-48 hours.
                    </p>
                    <div className="space-y-3">
                      <Link href="/staff/login">
                        <Button className="w-full">Go to Login Page</Button>
                      </Link>
                      <Link href="/staff">
                        <Button variant="outline" className="w-full">
                          Back to Staff Portal
                        </Button>
                      </Link>
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="container relative z-10">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Staff Registration</Badge>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Request Staff Access</h1>
                <p className="text-muted-foreground">Submit your application for staff account approval</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Staff Account Request
                  </CardTitle>
                  <CardDescription>Fill out the form below to request access to staff systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Company Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.name@tafeedtech.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select onValueChange={(value) => handleSelectChange("department", value)} disabled={isLoading}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          name="position"
                          placeholder="e.g. Developer"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Access</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        placeholder="Briefly explain why you need staff access..."
                        value={formData.reason}
                        onChange={handleChange}
                        rows={3}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleChange}
                          className="pr-10"
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

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="pr-10"
                          required
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          disabled={isLoading}
                        >
                          {showConfirmPassword ? (
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

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 space-y-4">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Already have an account? </span>
                      <Link href="/staff/login" className="text-sm text-primary hover:underline">
                        Sign in here
                      </Link>
                    </div>

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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
