import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8', // A vibrant blue for primary actions and highlights
        secondary: '#34a853', // A complementary green
        accent: '#fbbc05', // An accent yellow
        darkBackground: '#1a202c', // Dark background for dark mode
        darkText: '#e2e8f0', // Light text for dark mode
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as a modern sans-serif font
        serif: ['Merriweather', 'serif'], // A serif font for headings or specific sections
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode based on a class on the html tag
};

export default config;
