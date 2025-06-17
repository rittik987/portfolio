"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Laptop, Briefcase, GraduationCap, Code, Zap } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Bachelor of Computer Application",
    company: "Fullinfaws College, Bangalore University",
    period: "2022 - 2025",
    description:
      "Currently pursuing BCA with focus on modern web technologies, software development, and computer applications. Maintaining strong academic performance while working on practical projects.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "AI Image Generator Project",
    company: "Personal Project",
    period: "2024",
    description:
      "Developed a Next.js application using Hugging Face API to generate images from text prompts. Implemented customizable settings and Base64 image storage system.",
    icon: Zap,
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "JobZest - Job Portal Development",
    company: "Full-Stack Project",
    period: "2024",
    description:
      "Built a comprehensive job portal application with TypeScript, featuring job listings, search functionality, and user management for both job seekers and employers.",
    icon: Code,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Custom Lithopane Ecommerce Platform",
    company: "E-commerce Project",
    period: "2025",
    description:
      "Developed a specialized ecommerce platform for custom lithopane creation with Next.js, TypeScript, Razorpay integration, and PostgreSQL database.",
    icon: Laptop,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "INTRFACE 2023 Coding Competition",
    company: "Multi-College Competition",
    period: "2023",
    description:
      "Competed against students from multiple colleges, tackling algorithmic and UI/UX development challenges. Gained valuable experience in competitive programming.",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    id: 6,
    title: "Rainfall Detection System",
    company: "Weather Monitoring Project",
    period: "2025",
    description:
      "Built a weather monitoring and rainfall detection system with TypeScript, providing real-time weather data analysis and prediction capabilities.",
    icon: Code,
    color: "bg-cyan-500",
  },
  {
    id: 7,
    title: "Management Information Systems Seminar",
    company: "Professional Development",
    period: "2023",
    description:
      "Gained insights into modern information systems for organizational decision-making and data analysis. Enhanced understanding of business technology integration.",
    icon: Laptop,
    color: "bg-indigo-500",
  },
  {
    id: 8,
    title: "Higher Secondary Education",
    company: "Dewanhat High School",
    period: "2018 - 2020",
    description:
      "Completed higher secondary education in Cooch Behar, West Bengal with strong academic performance and foundation in science and mathematics.",
    icon: GraduationCap,
    color: "bg-gray-500",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
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
            Experience & Projects
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`ml-24 md:ml-0 md:w-5/12 ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
