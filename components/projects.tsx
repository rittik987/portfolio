"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Image Generator",
    description:
      "A Next.js application that uses Hugging Face API to generate images from text prompts. Features customizable settings like dimensions, steps, guidance scale, and seed. Images are stored as Base64.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "TypeScript", "Hugging Face API", "Base64", "AI/ML"],
    github: "https://github.com/rittik987/AI-ImageGenerato",
    demo: "#",
  },
 
  {
    id: 3,
    title: "Karni Interior",
    description:
      "An interior design showcase website built with TypeScript. Features modern design portfolio, service listings, and client interaction capabilities.",
    image: "/images/karni.png",
    tech: ["TypeScript", "React", "CSS3", "Responsive Design"],
    github: "https://github.com/rittik987/karni-interior",
    demo: "#",
  },
  {
    id: 4,
    title: "Rainfall Detection System",
    description:
      "A weather monitoring and rainfall detection system built with TypeScript. Provides real-time weather data analysis and prediction capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["TypeScript", "Weather API", "Data Analysis", "Real-time Monitoring"],
    github: "https://github.com/rittik987/rainfall-detection",
    demo: "#",
  },
  {
    id: 5,
    title: "Custom Lithopane Ecommerce Platform",
    description:
      "Full-Stack Personalized 3D Print Marketplace with Next.js, TypeScript, Razorpay integration, and PostgreSQL database for custom lithopane creation.",
    image: "/images/3d.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Razorpay", "Sharp.js"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Multi-Disease Prediction System",
    description:
      "Health Prediction Web App using Flask and Machine Learning to identify potential diseases based on medical data input from users.",
    image: "/images/diseas.png",
    tech: ["Flask", "Python", "HTML5", "CSS3", "Machine Learning"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -10 }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <div className="flex space-x-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={20} />
                            </motion.a>
                            {project.demo !== "#" && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink size={20} />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
            </motion.button>

            <motion.button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com/rittik987"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
