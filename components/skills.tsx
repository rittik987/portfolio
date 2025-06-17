"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"

const skillsData = [
  { name: "Python & JavaScript", value: 90, fill: "#3B82F6" },
  { name: "React.js & Next.js", value: 88, fill: "#06B6D4" },
  { name: "TypeScript", value: 85, fill: "#10B981" },
  { name: "PostgreSQL & Prisma", value: 82, fill: "#F59E0B" },
  { name: "Tailwind CSS", value: 87, fill: "#EF4444" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Skills & Expertise
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Radial Chart */}
            <motion.div
              className="h-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="20%"
                  outerRadius="80%"
                  data={skillsData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    fill="#8884d8"
                    animationDuration={2000}
                    animationBegin={isInView ? 500 : 0}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Skills List */}
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full"
                      style={{ backgroundColor: skill.fill }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.value}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
