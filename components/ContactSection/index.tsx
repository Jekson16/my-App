'use client';

import { motion } from 'framer-motion';
import styles from './style.module.css';

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="contact"
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.inner}>
        <motion.p className={styles.kicker} variants={itemVariants}>
          Get in touch
        </motion.p>

        <motion.h2 className={styles.title} variants={itemVariants}>
          Mari terhubung <br /> dan berbincang dengan tenang
        </motion.h2>

        <motion.a
          href="mailto:nababanjekson91@gmail.com"
          className={styles.email}
          variants={itemVariants}
        >
          nababanjekson91@gmail.com
        </motion.a>

        <motion.div className={styles.divider} variants={itemVariants} />

        <motion.a
          href="/CV_Jekson_Nababan (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvCard}
          variants={itemVariants}
        >
          <span className={styles.cvLabel}>Curriculum Vitae</span>
        </motion.a>

      <motion.div className={styles.footer} variants={itemVariants}>
  <span className={styles.location}>Jakarta, Indonesia</span>

  <div className={styles.socialIcons}>
    {/* Instagram */}
    <a
      href="https://www.instagram.com/jacknab__/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      title="Instagram"
    >
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/jekson-nababan-a436121a6/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0ZM2.4 8.75h4.8V21H2.4V8.75Zm7.2 0h4.6v1.68h.07c.64-1.21 2.2-2.49 4.53-2.49 4.85 0 5.75 3.19 5.75 7.34V21h-4.8v-5.26c0-1.25-.02-2.87-1.75-2.87-1.76 0-2.03 1.37-2.03 2.78V21H9.6V8.75Z"/>
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Jekson16"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.37 3.44 9.93 8.2 11.54.6.12.82-.26.82-.58v-2.02c-3.34.75-4.04-1.64-4.04-1.64-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.84 1.35 3.53 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.47-1.37-5.47-6.09 0-1.35.47-2.46 1.24-3.32-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 0 1 6 0c2.28-1.6 3.29-1.27 3.29-1.27.66 1.7.24 2.96.12 3.27.77.86 1.24 1.97 1.24 3.32 0 4.73-2.81 5.77-5.49 6.08.43.38.82 1.11.82 2.24v3.32c0 .32.22.7.82.58A12.23 12.23 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"/>
      </svg>
    </a>
  </div>

  <span className={styles.copy}>
    {new Date().getFullYear()} © Jekson Nababan
  </span>
</motion.div>

      </div>
    </motion.section>
  );
}
