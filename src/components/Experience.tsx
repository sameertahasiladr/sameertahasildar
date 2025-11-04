"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Associate Developer",
      company: "Worley Ventures",
      period: "October 2025 – Present",
      description: "Working on front-end development using React, HTML, JavaScript.",
      responsibilities: [
        "Developing responsive user interfaces with React",
        "Implementing interactive features using modern JavaScript",
        "Collaborating with design team for UI/UX improvements",
      ],
      current: true,
    },
    {
      role: "Full Stack Developer Intern",
      company: "Creative Capsule",
      period: "November 2024 – February 2025",
      description:
        "Built REST APIs with NestJS, implemented database integration, and developed full-stack applications.",
      responsibilities: [
        "Built REST APIs with NestJS",
        "Implemented database integration with MySQL/MongoDB",
        "Built Quotes App & Spelling Bee App using Nuxt.js",
        "Performed Playwright testing & API load testing",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 glassmorphic rounded-full border border-purple-500/30"
          >
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Career journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Current badge */}
              {exp.current && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/50 animate-pulse-glow"
                >
                  CURRENT
                </motion.div>
              )}

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 text-lg font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-300 group/item"
                    >
                      <span className="text-purple-500 mt-1 text-lg group-hover/item:scale-125 transition-transform">▹</span>
                      <span className="group-hover/item:text-purple-300 transition-colors">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}