'use client';
import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all elements with
 * .fade-up / .fade-left / .fade-right classes and adds
 * .visible when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.fade-up, .fade-left, .fade-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
