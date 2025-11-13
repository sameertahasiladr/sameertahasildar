"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className="min-h-screen">
        <Navbar />
        <Hero3D />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <CTASection />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}