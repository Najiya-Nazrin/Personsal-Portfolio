/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf6f3',
          100: '#f2ebe4',
          200: '#e5d5c8',
          300: '#d5b9a3',
          400: '#c49a7e',
          500: '#b17e5f',
          600: '#9d6850',
          700: '#825445',
          800: '#6c463d',
          900: '#5b3c36',
        },
        cream: '#fdfaf7',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};