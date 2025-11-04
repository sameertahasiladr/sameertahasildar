"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "MSc in Information Technology",
      institution: "Goa University",
      period: "2023 – 2025",
      gpa: "7.35/10",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Goa University",
      period: "2020 – 2023",
      gpa: "6.55/10",
    },
  ];

  const achievements = [
    { text: "Increased Quotes App user base by 35% in 6 months", icon: Trophy },
    { text: "Successfully completed multiple full-stack projects", icon: Award },
    { text: "Gained expertise in modern web technologies", icon: BookOpen },
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

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
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Academic background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            Education & Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {edu.period}
                      </span>
                      <motion.span 
                        className="text-purple-400 font-bold text-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        GPA: {edu.gpa}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.01, y: -5 }}
          className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all group/item"
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-purple-300 transition-colors">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}