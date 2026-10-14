import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        surface: '#111111',
        line: '#1E1E1E',
        paper: '#F5F5F5',
        muted: '#8A8A8A',
        volt: '#C7FF3D',
      },
      fontFamily: {
        display: ['"Anton"', '"Bebas Neue"', '"Arial Narrow"', 'sans-serif'],
        body: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
    },
  },
  plugins: [],
};
export default config;
