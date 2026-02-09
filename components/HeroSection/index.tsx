'use client';

import Image from 'next/image';
import styles from './style.module.css';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Arrow Component - Inline
const HeroArrow = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [0, 10, 0],
        opacity: 1
      }}
      transition={{
        y: {
          duration: 1.8,
          ease: 'easeInOut',
          repeat: Infinity,
        },
        opacity: {
          duration: 0.6,
          delay: 0.5
        }
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
      }}
      aria-label="Scroll down indicator"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ 
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
        }}
      >
        <path
          d="M12 2V22M12 22L5 15M12 22L19 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

// Animation Variants
const slideUp = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

const HeroSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      let x = 0;

      const ticker = gsap.ticker.add(() => {
        x -= 0.05; // Bergerak satu arah terus (ke kiri)

        if (x <= -50) x = 0;

        if (sliderRef.current) {
          gsap.set(sliderRef.current, {
            xPercent: x
          });
        }
      });

      return () => {
        gsap.ticker.remove(ticker);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      animate="animate"
      className={styles.hero}
    >
      <Image
        src="/images/image_back.avif"
        alt="Hero Background"
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
        quality={90}
      />

      <div className={styles.sliderContainer}>
        <div ref={sliderRef} className={styles.slider}>
          <span>Creative Developer —</span>
          <span>Creative Developer —</span>
        </div>
      </div>

      <div className={styles.description}>
        <HeroArrow />
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </motion.section>
  );
};

export default HeroSection;