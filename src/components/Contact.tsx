"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Loader2, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, text: "sameertahasildar077@gmail.com", href: "mailto:sameertahasildar077@gmail.com" },
    { icon: Phone, text: "9096265188", href: "tel:9096265188" },
    { icon: MapPin, text: "Old Goa", href: null },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
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
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Let's connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to
                  be part of your vision. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group/item"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow group-hover/item:shadow-lg group-hover/item:shadow-purple-500/50 transition-shadow">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 group-hover/item:text-purple-300 transition-colors text-sm">
                            {info.text}
                          </span>
                        </motion.a>
                      ) : (
                        <motion.div
                          className="flex items-center gap-4 p-4 rounded-xl"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm">{info.text}</span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glassmorphic rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </div>

              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}