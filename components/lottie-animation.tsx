"use client"

import { useEffect, useRef } from "react"

export default function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate Lottie animation with CSS animations
    // In a real implementation, you would use lottie-react here
    const container = containerRef.current
    if (!container) return

    // Create animated circuit lines
    const createCircuitLine = () => {
      const line = document.createElement("div")
      line.className = "absolute bg-gradient-to-r from-blue-400 to-purple-600 opacity-30"
      line.style.width = Math.random() * 200 + 100 + "px"
      line.style.height = "2px"
      line.style.left = Math.random() * 100 + "%"
      line.style.top = Math.random() * 100 + "%"
      line.style.animation = `pulse ${Math.random() * 3 + 2}s infinite`
      container.appendChild(line)

      setTimeout(() => {
        container.removeChild(line)
      }, 5000)
    }

    // Create animated map pins
    const createMapPin = () => {
      const pin = document.createElement("div")
      pin.className = "absolute w-4 h-4 bg-blue-500 rounded-full opacity-60"
      pin.style.left = Math.random() * 100 + "%"
      pin.style.top = Math.random() * 100 + "%"
      pin.style.animation = `ping ${Math.random() * 2 + 1}s infinite`
      container.appendChild(pin)

      setTimeout(() => {
        container.removeChild(pin)
      }, 3000)
    }

    const intervalLines = setInterval(createCircuitLine, 500)
    const intervalPins = setInterval(createMapPin, 1000)

    return () => {
      clearInterval(intervalLines)
      clearInterval(intervalPins)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.4&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1.5&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
    </div>
  )
}
