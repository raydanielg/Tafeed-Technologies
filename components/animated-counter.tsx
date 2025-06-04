"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export default function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration, isInView])

  return <span ref={ref}>{count}</span>
}
