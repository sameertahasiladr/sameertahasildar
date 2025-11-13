"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mesh, Group } from "three";

function AnimatedParticles() {
  const groupRef = useRef<Group>(null);
  const count = 200;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
        ] as [number, number, number],
        size: Math.random() * 0.05 + 0.02,
        color: Math.random() > 0.5 ? "#6366f1" : "#8b5cf6",
      })),
    []
  );

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function CentralSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 3D Background */}
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              <CentralSphere />
              <AnimatedParticles />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-glow"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Sameer
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-purple-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Web Developer Portfolio
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-64 md:w-96 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Loading Experience</span>
              <span className="text-sm text-purple-400 font-semibold">{progress}%</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden border border-purple-500/30">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                }}
              />
            </div>
          </motion.div>

          {/* Animated Dots */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </motion.div>
    </AnimatePresence>
  );
}
