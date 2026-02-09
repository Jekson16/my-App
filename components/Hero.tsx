'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  

  // Apple-style scale & fade
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="h-screen flex items-center justify-center"
    >
      <motion.div
        style={{ scale, opacity }}
        className="text-center"
      >
        <h1 className="text-white text-[clamp(2.5rem,7vw,6rem)] font-light tracking-tight">
          Creative Developer
        </h1>
        <p className="mt-6 text-white/60 text-sm tracking-wide">
          Crafting digital experiences
        </p>
      </motion.div>
    </section>
  );
}
