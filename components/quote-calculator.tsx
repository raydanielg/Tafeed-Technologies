"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

const services = [
  { id: "web", label: "Web Design & Development", basePrice: 500 },
  { id: "hosting", label: "Hosting Solutions", basePrice: 100 },
  { id: "security", label: "Cybersecurity Services", basePrice: 300 },
  { id: "mobile", label: "Mobile App Development", basePrice: 800 },
  { id: "database", label: "Database Solutions", basePrice: 400 },
  { id: "custom", label: "Custom Software Development", basePrice: 1000 },
]

const projectSizes = [
  { id: "small", label: "Small", multiplier: 1 },
  { id: "medium", label: "Medium", multiplier: 1.5 },
  { id: "large", label: "Large", multiplier: 2.5 },
]

export default function QuoteCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [projectSize, setProjectSize] = useState("medium")
  const [urgency, setUrgency] = useState(1)

  const calculateQuote = () => {
    const basePrice = selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service?.basePrice || 0)
    }, 0)

    const sizeMultiplier = projectSizes.find((s) => s.id === projectSize)?.multiplier || 1
    const urgencyMultiplier = 1 + (urgency - 1) * 0.2

    return Math.round(basePrice * sizeMultiplier * urgencyMultiplier)
  }

  const estimatedPrice = calculateQuote()
  const hasSelectedServices = selectedServices.length > 0

  const generateWhatsAppMessage = () => {
    const selectedServiceNames = selectedServices.map((id) => services.find((s) => s.id === id)?.label).join(", ")

    const size = projectSizes.find((s) => s.id === projectSize)?.label

    return encodeURIComponent(
      `Hello Cybermac Technologies, I'm interested in the following services: ${selectedServiceNames}. ` +
        `Project size: ${size}. Urgency level: ${urgency}/5. ` +
        `My estimated quote is $${estimatedPrice}. I'd like to discuss this project further.`,
    )
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Project Quote Calculator</CardTitle>
        <CardDescription>Select the services you need and get an instant estimate for your project.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Select Services</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-start space-x-2">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedServices([...selectedServices, service.id])
                    } else {
                      setSelectedServices(selectedServices.filter((id) => id !== service.id))
                    }
                  }}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor={service.id} className="font-normal">
                    {service.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">Starting from ${service.basePrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Project Size</h3>
          <RadioGroup value={projectSize} onValueChange={setProjectSize} className="grid sm:grid-cols-3 gap-3">
            {projectSizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-2">
                <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                <Label htmlFor={`size-${size.id}`} className="font-normal">
                  {size.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Urgency Level</h3>
            <span className="text-sm font-medium">{urgency}/5</span>
          </div>
          <Slider
            value={[urgency]}
            min={1}
            max={5}
            step={1}
            onValueChange={(value) => setUrgency(value[0])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Standard</span>
            <span>Urgent</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full p-4 bg-muted rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Estimated Price:</span>
            <span className="text-2xl font-bold">${hasSelectedServices ? estimatedPrice : "0"}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            This is an estimate. Final pricing may vary based on specific requirements.
          </p>
        </div>

        <Link
          href={hasSelectedServices ? `https://wa.me/255742710054?text=${generateWhatsAppMessage()}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full" size="lg" disabled={!hasSelectedServices}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Discuss on WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
