'use client';
import { motion } from 'framer-motion';

const Arrow = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 0
      }}
      style={{
        display: 'inline-block',
        lineHeight: 0
      }}
      aria-label="Scroll down"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2V22M12 22L5 15M12 22L19 15" />
      </svg>
    </motion.div>
  );
};

export default Arrow;