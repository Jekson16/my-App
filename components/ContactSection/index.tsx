'use client';

import { motion } from 'framer-motion';
import styles from './style.module.css';

export default function ContactSection() {
  // Variabel untuk animasi stagger (opsional, untuk efek lebih halus)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Elemen muncul bertahap
      },
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
        {/* Kicker */}
        <motion.p className={styles.kicker} variants={itemVariants}>
          Get in touch
        </motion.p>

        {/* Title */}
        <motion.h2 className={styles.title} variants={itemVariants}>
          Mari terhubung <br /> dan berbincang dengan tenang
        </motion.h2>

        {/* Email Link */}
        <motion.a
          href="mailto:nababanjekson91@gmail.com"
          className={styles.email}
          variants={itemVariants}
          aria-label="Kirim email ke Jekson Nababan"
          title="Klik untuk mengirim email"
        >
          nababanjekson91@gmail.com
        </motion.a>

        {/* Divider */}
        <motion.div className={styles.divider} variants={itemVariants} />

        {/* CV Card */}
        <motion.a
          href="/Jekson-Nababan-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvCard}
          variants={itemVariants}
          aria-label="Unduh Curriculum Vitae Jekson Nababan"
          title="Klik untuk melihat CV"
        >
          <span className={styles.cvLabel}>Curriculum Vitae</span>
        </motion.a>

        {/* Footer */}
        <motion.div className={styles.footer} variants={itemVariants}>
          <span>Jakarta, Indonesia</span>
          <span>{new Date().getFullYear()} © Jekson Nababan</span>
        </motion.div>
      </div>
    </motion.section>
  );
}