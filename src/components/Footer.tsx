"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sameertahasiladr",
      label: "GitHub",
      color: "hover:bg-purple-500/20",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sameer-tahasildar077",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20",
    },
    {
      icon: Mail,
      href: "mailto:sameertahasildar077@gmail.com",
      label: "Email",
      color: "hover:bg-pink-500/20",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 overflow-hidden border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3 
              className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Sameer Tahasildar
            </motion.h3>
            <p className="text-gray-400">Web Developer • Software Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glassmorphic rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="text-gray-400 text-sm flex items-center justify-center gap-2 mb-2">
              <span>© {currentYear} Sameer Tahasildar. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>and passion</span>
            </div>

            {/* Tech Stack */}
            <p className="text-gray-500 text-xs">
              Built with Next.js • Three.js • Framer Motion • Tailwind CSS
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mt-4 p-3 glassmorphic rounded-full border border-white/10 hover:border-purple-500/50 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </motion.button>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
    </footer>
  );
}