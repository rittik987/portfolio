"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullText =
    "I'm a highly skilled Full-Stack Developer with expertise in Python, JavaScript, TypeScript, React.js, and Next.js, along with modern styling frameworks like Tailwind CSS. I'm proficient in building scalable web applications, RESTful APIs, and efficient backend systems using PostgreSQL and Prisma. I have hands-on experience with Git, GitHub, Vercel, and modern deployment practices."

  useEffect(() => {
    if (isInView && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isInView, currentIndex, fullText])

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo with 3D Card Effect */}
            <motion.div
              className="relative perspective-1000"
              initial={{ rotateY: -30, opacity: 0 }}
              animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="relative w-80 h-80 mx-auto max-w-full"
                whileHover={{ rotateY: 15, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl overflow-hidden h-full flex items-center justify-center">
                  <div className="w-full h-full max-w-[280px] max-h-[280px] flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-16%20at%2012.37.20%20PM-OsRuIkunDWMYvMYlNpykL9bvQu2AyE.jpeg"
                      alt="Rittik Hossen"
                      width={280}
                      height={280}
                      className="rounded-xl object-cover aspect-square"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-3 rounded-full">
                    <span className="text-2xl">👋</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Typing Animation Text */}
            <motion.div
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed min-h-[120px]">
                {displayText}
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "Prisma",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
