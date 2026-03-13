/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal:  { DEFAULT: '#14B8A6', dark: '#0D9488', light: '#5EEAD4' },
        navy:  { DEFAULT: '#0F2A44', mid:  '#1E3A5F' },
        green: { DEFAULT: '#22C55E', dark: '#16A34A' },
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        body:    ['var(--font-dm)',      'DM Sans',            'sans-serif'],
        mono:    ['var(--font-mono-var)','JetBrains Mono',     'monospace'],
      },
    },
  },
  plugins: [],
};
