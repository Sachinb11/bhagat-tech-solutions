'use client';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggle: () => {},
  mounted: false,
});

export const useThemeContext = () => useContext(ThemeContext);
