/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        stone: {
          DEFAULT: '#23272F', // Dark stone gray
          light: '#3A3F47',
          dark: '#181A1F',
        },
        marble: {
          DEFAULT: '#F8F8F6', // Marble white
          gold: '#C9A14A', // Gold accent
          accent: '#1A365D', // Deep blue accent
          blue: '#2B4C7E', // Supporting blue
        },
        accent: {
          gold: '#C9A14A',
          blue: '#1A365D',
          orange: '#FFB366',
        },
      },
    },
  },
  plugins: [],
};