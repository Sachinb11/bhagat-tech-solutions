'use client';
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bts-theme';
const DEFAULT     = 'light';   // ← default is now Light Mode

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT);
  const [mounted, setMounted] = useState(false);

  /* On mount — read localStorage, apply to <html> */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  return { theme, toggle, mounted };
}
