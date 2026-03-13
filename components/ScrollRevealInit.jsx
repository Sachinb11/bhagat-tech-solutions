'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Renders nothing — just activates the scroll reveal observer.
 * Include once in the root page/layout.
 */
export default function ScrollRevealInit() {
  useScrollReveal();
  return null;
}
