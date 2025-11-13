"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Phone, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glassmorphic rounded-full border border-purple-500/30 glow"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Let's Collaborate</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm currently available for freelance projects, full-time opportunities, and exciting collaborations.
            <span className="text-purple-400"> Let's create something amazing together!</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="mailto:sameertahasildar077@gmail.com"
              className="group px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold glassmorphic hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email Me",
              value: "sameertahasildar077@gmail.com",
              href: "mailto:sameertahasildar077@gmail.com",
              color: "from-indigo-500 to-blue-500",
            },
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Call Me",
              value: "+91 9096265188",
              href: "tel:+919096265188",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: "Message Me",
              value: "WhatsApp Available",
              href: "https://wa.me/919096265188",
              color: "from-pink-500 to-rose-500",
            },
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-6 glassmorphic rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 neon-border-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {contact.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {contact.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            Open to opportunities • Available for freelance • Ready to collaborate
          </p>
        </motion.div>
      </div>
    </section>
  );
}
