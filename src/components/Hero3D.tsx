"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mesh, Group } from "three";
import { Sparkles, ArrowRight } from "lucide-react";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 100, 200]} />
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
}

function Particles() {
  const count = 100;
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  const positions = useMemo(
    () =>
      Array.from({ length: count }).map(() => [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]),
    []
  );

  return (
    <group ref={groupRef}>
      {positions.map((position, i) => (
        <mesh key={i} position={position as [number, number, number]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <AnimatedSphere />
            <Particles />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glassmorphic rounded-full border border-purple-500/30 glow"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-text text-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Sameer Tahasildar
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <p className="text-2xl md:text-4xl text-gray-300 font-light">
              Web Developer <span className="text-purple-400">•</span> Associate Developer
            </p>
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Crafting modern, interactive web experiences with cutting-edge technologies
            <span className="text-purple-400">.</span> Turning ideas into reality through code
            <span className="text-purple-400">.</span>
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#projects"
              className="group px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold glassmorphic hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex justify-center gap-8 md:gap-16 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { value: "1.3+", label: "Years Experience" },
              { value: "11+", label: "Projects Completed" },
              { value: "10+", label: "Technologies" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll Down</span>
              <svg
                className="w-6 h-6 text-purple-400 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}