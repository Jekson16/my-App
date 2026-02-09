'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const menus = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const controls = useAnimation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // 🔥 Mobile hide / show
      if (isMobile) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          controls.start({ y: '-100%', opacity: 0 });
        } else {
          controls.start({ y: '0%', opacity: 1 });
        }
      }

      lastScrollY.current = currentScrollY;

      // 🔥 Scroll spy
      menus.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 2;

        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(id);
          setIsDark(id !== 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.nav
      animate={controls}
      initial={{ y: '0%', opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 w-full z-50 font-sans
        transition-colors duration-500
        ${isDark ? 'bg-black' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-7 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-white text-[13px] tracking-[0.07em] hover:opacity-60 transition-opacity"
        >
          Jekson Nababan
        </a>

        {/* Menu */}
        <div className="flex items-center gap-12">
          {menus.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <div key={id} className="relative">
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className="block text-white text-[13px] tracking-[0.05em] hover:opacity-60 transition-opacity"
                >
                  {label}
                </a>

                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
