'use client';
import { useState, useEffect, useRef } from 'react';

const TEXTS = [
  'Grow Your Business Digitally',
  'Build Premium Software Solutions',
  'Create Stunning Mobile Apps',
  'Dominate Search Engine Rankings',
];

export function useTypewriter() {
  const [display, setDisplay]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef  = useRef(0);
  const charRef   = useRef(0);

  useEffect(() => {
    let timeout;

    const tick = () => {
      const current = TEXTS[indexRef.current];

      if (!isDeleting) {
        // Typing forward
        setDisplay(current.slice(0, charRef.current + 1));
        charRef.current += 1;

        if (charRef.current > current.length) {
          // Pause then start deleting
          timeout = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
        timeout = setTimeout(tick, 70);
      } else {
        // Deleting backward
        setDisplay(current.slice(0, charRef.current - 1));
        charRef.current -= 1;

        if (charRef.current < 0) {
          setIsDeleting(false);
          indexRef.current = (indexRef.current + 1) % TEXTS.length;
          charRef.current  = 0;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, 40);
      }
    };

    timeout = setTimeout(tick, 70);
    return () => clearTimeout(timeout);
  }, [isDeleting]);

  return display;
}
