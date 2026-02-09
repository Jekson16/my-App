'use client';

import { motion } from 'framer-motion';
import styles from './style.module.css';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className={styles.section}  
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className={styles.inner}>
        <p className={styles.kicker}>About</p>

        <h2 className={styles.title}>
          Crafting digital experiences <br />
          with clarity & purpose
        </h2>

        <div className={styles.content}>
          <p>
           Saya adalah pribadi yang sedang berada dalam fase membangun diri dengan serius. Selama beberapa waktu terakhir, saya banyak menghabiskan waktu untuk mengenal diri sendiri, belajar secara mandiri, dan memperbaiki arah hidup saya langkah demi langkah.





          </p>

          <p>
            Saya terbiasa berjalan sendiri, menghadapi proses yang tidak selalu mudah, dan belajar dari pengalaman tanpa banyak bergantung pada orang lain. Dari situ, saya belajar tentang kedisiplinan, kesabaran, dan pentingnya konsistensi — bahwa perubahan nyata tidak datang secara instan, tetapi melalui usaha kecil yang dilakukan terus-menerus.
          </p>

          <p>
     Saya percaya bahwa setiap orang punya waktunya masing-masing. Karena itu, saya memilih untuk fokus pada proses, memperkuat mental, membangun kebiasaan yang baik, dan menyiapkan diri agar kelak siap ketika kesempatan datang.

Halaman ini bukan tentang pencapaian besar, melainkan tentang perjalanan, nilai yang saya pegang, dan komitmen saya untuk terus bertumbuh menjadi pribadi yang lebih baik dan bertanggung jawab.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
