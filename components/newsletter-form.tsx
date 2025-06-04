"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <Card className="border-2">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Stay Updated</CardTitle>
        <CardDescription>
          Subscribe to our newsletter for the latest tech insights, tips, and special offers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || isSubmitted}
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting || isSubmitted} className="min-w-[120px]">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {isSubmitted && (
            <p className="text-sm text-green-600">
              Thank you for subscribing! You'll receive our next newsletter soon.
            </p>
          )}
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-muted-foreground">
        We respect your privacy. You can unsubscribe at any time.
      </CardFooter>
    </Card>
  )
}
