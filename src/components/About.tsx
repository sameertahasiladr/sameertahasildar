"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Linkedin, Github, User, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactItems = [
    { icon: MapPin, text: "Old Goa", href: null },
    { icon: Phone, text: "9096265188", href: "tel:9096265188" },
    { icon: Mail, text: "sameertahasildar077@gmail.com", href: "mailto:sameertahasildar077@gmail.com" },
    { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/sameer-tahasildar077" },
    { icon: Github, text: "GitHub Profile", href: "https://github.com/sameertahasiladr" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 glassmorphic rounded-full border border-purple-500/30"
          >
            <User className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Get to know me</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a dedicated <span className="text-purple-400 font-semibold">BCA graduate</span> with an{" "}
                  <span className="text-purple-400 font-semibold">MSc in Information Technology (2025)</span>. I
                  specialize in modern web development using{" "}
                  <span className="text-indigo-400 font-medium">JavaScript, React, Nuxt.js, PHP, NestJS, MySQL, and MongoDB</span>.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy building <span className="text-purple-400 font-semibold">interactive, user-centric applications</span> and
                  continuously learning new technologies to stay at the forefront of web development.
                </p>

                <div className="pt-4 flex flex-wrap gap-2">
                  {["Problem Solver", "Fast Learner", "Team Player"].map((badge, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            variants={itemVariants}
            className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>

              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Component = item.href ? motion.a : motion.div;
                  return (
                    <Component
                      key={index}
                      href={item.href || undefined}
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item"
                      whileHover={{ x: 8 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg group-hover/item:from-indigo-500/30 group-hover/item:to-purple-500/30 transition-all">
                        <item.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-purple-300 transition-colors flex-1 text-sm">
                        {item.text}
                      </span>
                      {item.href && (
                        <svg
                          className="w-4 h-4 text-gray-500 group-hover/item:text-purple-400 transition-colors"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5l7 7-7 7"></path>
                        </svg>
                      )}
                    </Component>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}