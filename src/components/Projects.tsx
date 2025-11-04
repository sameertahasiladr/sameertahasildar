"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code, Rocket, Eye } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "3D Developer Portfolio (Live Demo)",
      description: "Modern, fully animated 3D portfolio with Three.js particles, glassmorphism, neon effects, and smooth page transitions.",
      tech: ["Next.js", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      isLive: true,
      link: "https://sameertahasildar.netlify.app/",
    },
    {
      title: "Quotes App",
      description: "User management, Quote of the Day, filters, REST API, responsive UI.",
      tech: ["Nuxt.js", "REST API", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Skill Matrix System",
      description: "File upload, dynamic matrix, roadmap feature, PDF generation.",
      tech: ["React", "Node.js", "PDF.js"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Photo Memory App",
      description: "Upload photos, store offline, search by date/tags.",
      tech: ["React", "PouchDB", "UploadThing"],
      gradient: "from-green-500 to-emerald-500",
      link: "https://memoy.netlify.app/",
    },
    {
      title: "Spelling Bee App",
      description: "Word guessing, score tracking, Tailwind UI.",
      tech: ["Nuxt.js", "Tailwind CSS", "JavaScript"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Real Estate Website",
      description: "React + ShadCN UI, property listings, contact sellers.",
      tech: ["React", "ShadCN UI", "TypeScript"],
      gradient: "from-red-500 to-rose-500",
      link: "https://realestatwebsite.netlify.app/",
    },
    {
      title: "Drive in Goa – Car Rental",
      description: "Car listings, booking via WhatsApp/call/form.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      gradient: "from-indigo-500 to-blue-500",
      link: "https://driveingoa.netlify.app/",
    },
    {
      title: "Central Car Rental",
      description: "Premium car rental service with modern UI and seamless booking experience.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      gradient: "from-cyan-500 to-blue-500",
      link: "https://centalcar.netlify.app/",
    },
    {
      title: "C2C Bike Store",
      description: "Buyer–seller platform, chat, product management.",
      tech: ["React", "MongoDB", "Socket.io"],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Railway Management System",
      description: "PHP + MySQL, booking system, admin panel.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "iTech Solutions",
      description: "Professional IT solutions website with modern design and comprehensive services showcase.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      gradient: "from-blue-600 to-indigo-600",
      link: "https://itechsolutio.netlify.app/",
    },
  ];

  const handleProjectClick = (link?: string) => {
    if (!link) return;
    
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage(
        { type: "OPEN_EXTERNAL_URL", data: { url: link } },
        "*"
      );
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 glassmorphic rounded-full border border-purple-500/30"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">My work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              onClick={() => handleProjectClick(project.link)}
              className={`glassmorphic rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden ${
                project.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Live Badge */}
              {project.isLive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
                  transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                  className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/50 animate-pulse-glow flex items-center gap-1.5"
                >
                  <Eye className="w-3 h-3" />
                  LIVE DEMO
                </motion.div>
              )}

              {/* Deployed -> changed to LIVE DEMO */}
              {project.link && !project.isLive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
                  transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                  className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/50 animate-pulse-glow flex items-center gap-1.5"
                >
                  <Eye className="w-3 h-3" />
                  LIVE DEMO
                </motion.div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                  {project.link && (
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </motion.div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.08 + i * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative corner gradient */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}