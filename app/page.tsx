'use client';

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Preloader from '@/components/Preloader';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

import SmoothScroll from '@/components/SmoothScroll';
import TechStack from '@/components/TechStack';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
  

          <SmoothScroll>
            <main>
              <section id="home">
                <HeroSection />
              </section>

              {/* 🔥 TECH STACK DI SINI */}
              <section>
                <TechStack />
              </section>

              <section id="about">
                <AboutSection />
              </section>

              <section id="projects">
                <ProjectsSection />
              </section>

              <section id="contact">
                <ContactSection />
              </section>
            </main>
          </SmoothScroll>
        </>
      )}
    </>
  );
}
