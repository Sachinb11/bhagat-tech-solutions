'use client';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle, mounted } = useThemeContext();

  /* Avoid hydration mismatch — render placeholder until mounted */
  if (!mounted) {
    return <div className="theme-toggle-placeholder" aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      className={`theme-toggle${isDark ? ' theme-toggle--dark' : ' theme-toggle--light'}`}
      onClick={toggle}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Track */}
      <span className="tt-track">
        {/* Sun icon */}
        <span className="tt-icon tt-icon--sun" aria-hidden="true">
          <i className="fas fa-sun" />
        </span>
        {/* Moon icon */}
        <span className="tt-icon tt-icon--moon" aria-hidden="true">
          <i className="fas fa-moon" />
        </span>
        {/* Sliding knob */}
        <span className="tt-knob" />
      </span>
      {/* Label */}
      <span className="tt-label">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
