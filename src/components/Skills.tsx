"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "Nuxt.js", level: 85 },
        { name: "Angular", level: 75 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "NestJS", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Python", level: 70 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 70 },
        { name: "WordPress", level: 75 },
        { name: "UI/UX", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

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
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">My expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
              className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        <motion.span
                          className="text-purple-400 font-bold text-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative h-2.5 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.3,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full relative rounded-full"
                          style={{
                            background: `linear-gradient(90deg, 
                              rgb(99, 102, 241) 0%, 
                              rgb(139, 92, 246) 50%, 
                              rgb(236, 72, 153) 100%)`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 shimmer" />
                          
                          {/* Glow effect */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-purple-500/50" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative sparkle */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}