'use client';
import { useState, useEffect } from 'react';

/**
 * Tracks scroll position for navbar styling
 * and detects which section is currently in view.
 */
export function useNavScroll() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState('home');

  useEffect(() => {
    const SECTIONS = ['home', 'about', 'services', 'why', 'portfolio', 'team', 'contact'];

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = 'home';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 110) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, activeSection };
}
