"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { ExternalLink, Code, Rocket, Eye, Sparkles } from "lucide-react";

function MagneticCard({ children, link }: { children: React.ReactNode; link?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });
  
  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
      {isHovered && link && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0,
              }}
              animate={{
                y: [null, `${Math.random() * -50 - 50}px`],
                opacity: [1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 1 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "3D Developer Portfolio",
      description: "Modern, fully animated 3D portfolio with Three.js particles, glassmorphism, neon effects, and smooth page transitions.",
      tech: ["Next.js", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
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
      link: "https://itechsolution.vercel.app/",
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
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 glassmorphic rounded-full border border-purple-500/30 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Rocket className="w-4 h-4 text-purple-400 relative z-10" />
            <span className="text-sm text-purple-300 font-medium relative z-10">My work</span>
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
            >
              <MagneticCard link={project.link}>
                <motion.div
                  onClick={() => handleProjectClick(project.link)}
                  className={`glassmorphic rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-border-hover group relative overflow-hidden h-full ${
                    project.link ? "cursor-pointer" : "cursor-default"
                  }`}
                  whileHover={{ y: -10 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated border light */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.4) 90deg, transparent 180deg, rgba(99, 102, 241, 0.4) 270deg, transparent 360deg)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Live Badge */}
                  {project.link && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
                      transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                      className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/50 flex items-center gap-1.5 z-20"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Eye className="w-3 h-3" />
                      </motion.div>
                      LIVE DEMO
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl glow relative overflow-hidden"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <Code className="w-6 h-6 text-white relative z-10" />
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
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner gradient */}
                  <motion.div 
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                  >
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </motion.div>
              </MagneticCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}