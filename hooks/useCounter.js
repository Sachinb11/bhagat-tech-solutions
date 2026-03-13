'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from 0 → target when the element
 * enters the viewport.
 *
 * @param {number} target  - final number to count to
 * @param {string} suffix  - e.g. "+" or "★"
 */
export function useCounter(target, suffix = '') {
  const [count, setCount]       = useState(0);
  const [started, setStarted]   = useState(false);
  const ref                     = useRef(null);

  // Observe when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Run animation once started
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = () => {
      cur = Math.min(cur + Math.ceil(target / 40), target);
      setCount(cur);
      if (cur < target) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return { ref, display: `${count}${suffix}` };
}
