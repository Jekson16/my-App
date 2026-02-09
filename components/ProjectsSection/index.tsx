'use client';

import { motion } from 'framer-motion';
import styles from './style.module.css';

const projects = [
  {
    title: 'Ruang Pribadi',
    description:
      'Sebuah ruang yang saya bangun untuk merangkum proses, pemikiran, dan arah hidup yang sedang saya jalani. Bukan tentang hasil akhir, tetapi tentang perjalanan.',
    year: '2025',
  },
  {
    title: 'Eksplorasi',
    description:
      'Beberapa percobaan kecil yang saya gunakan untuk memahami alur, struktur, dan rasa dalam sebuah karya, sambil belajar konsisten menyelesaikan apa yang dimulai.',
    year: '2024',
  },
  {
    title: 'Proses Berjalan',
    description:
      'Catatan dari hal-hal sederhana yang saya kerjakan sebagai bagian dari usaha membangun kebiasaan, disiplin, dan tanggung jawab terhadap diri sendiri.',
    year: '2024',
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className={styles.inner}>
        <p className={styles.kicker}>Perjalanan</p>

        <h2 className={styles.title}>
          Beberapa hal <br />
          yang saya bangun dalam proses
        </h2>

        <div className={styles.list}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.meta}>
                <h3>{project.title}</h3>
                <span>{project.year}</span>
              </div>

              <p className={styles.desc}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
