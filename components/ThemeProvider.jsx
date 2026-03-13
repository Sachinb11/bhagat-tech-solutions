'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useTheme }    from '@/hooks/useTheme';

export default function ThemeProvider({ children }) {
  const ctx = useTheme();
  return (
    <ThemeContext.Provider value={ctx}>
      {children}
    </ThemeContext.Provider>
  );
}
