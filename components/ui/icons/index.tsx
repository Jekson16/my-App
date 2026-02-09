'use client';
import { motion } from 'framer-motion';

export const HeroArrow = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.8,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      style={{
        display: 'inline-block',
        lineHeight: 0,
      }}
      aria-label="Scroll down"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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