"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

export default function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        {/* Animated Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 animate-pulse"></div>

        {/* Grid Pattern - Fixed SVG */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full animate-bounce"></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-3 h-3 bg-blue-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20"
          >
            Leading Technology Solutions Provider in East Africa
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transforming Ideas into{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8">
            Tafeed Technologies delivers cutting-edge hosting, cybersecurity, web design, and mobile app development
            services to help your business thrive in the digital world.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://wa.me/255742710054" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto backdrop-blur-sm border-primary/20">
                Contact via WhatsApp
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#stats" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-1">Scroll Down</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
