import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0077FF',       // Use your own branding
        secondary: '#00E7C7',
        dark: '#0A2540',
        accent: '#1D4ED8',        // Optional
      },
    },
  },
  plugins: [],
};

export default config;
