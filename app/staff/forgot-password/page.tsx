"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate email domain
    if (!email.endsWith("@tafeedtech.com")) {
      setError("Please use your @tafeedtech.com email address")
      setIsLoading(false)
      return
    }

    // Simulate password reset request
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Reset link sent!",
        description: "Check your email for password reset instructions.",
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
                    <h1 className="text-2xl font-bold mb-2">Reset Link Sent!</h1>
                    <p className="text-muted-foreground mb-6">
                      We've sent a password reset link to <strong>{email}</strong>. Please check your email and follow
                      the instructions to reset your password.
                    </p>
                    <div className="space-y-3">
                      <Link href="/staff/login">
                        <Button className="w-full">Back to Login</Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setIsSubmitted(false)
                          setEmail("")
                        }}
                      >
                        Send Another Reset Link
                      </Button>
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
                <Badge className="mb-4">Password Reset</Badge>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Forgot Password</h1>
                <p className="text-muted-foreground">Enter your email to receive a password reset link</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Reset Password
                  </CardTitle>
                  <CardDescription>We'll send you a link to reset your password</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.name@tafeedtech.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                          disabled={isLoading}
                        />
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
                          Sending Reset Link...
                        </>
                      ) : (
                        "Send Reset Link"
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 space-y-4">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Remember your password? </span>
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
