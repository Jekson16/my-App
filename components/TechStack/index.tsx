'use client';

import styles from './style.module.css';
import Image from 'next/image';
import MagneticItem from '@/components/MagneticItem';

const techs = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Node.js', icon: '/icons/node.svg' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Framer', icon: '/icons/framer.svg' },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
  

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...techs, ...techs].map((tech, i) => (
            <MagneticItem key={i}>
              <div className={styles.item}>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={34}
                  height={34}
                />
                <span>{tech.name}</span>
              </div>
            </MagneticItem>
          ))}
        </div>
      </div>
    </section>
  );
}
