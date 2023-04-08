const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          lg: '1024px',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
        display: ['var(--font-display)'],
      },
      colors: {
        ...colors,
        orange_300: '#FF9E00',
        orange_400: '#FF8500',
        orange_500: '#FF6D00',
        purple_50: '#9D4EDD',
        purple_100: '#7B2CBF',
        purple_200: '#5A189A',
        purple_300: '#3C096C',
        purple_400: '#240046',
      },
    },
  },
  plugins: [],
}
