/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kantumruy Pro"', 'sans-serif'],
        header: ['"Battambang"', 'serif'],
      },
      colors: {
        primary: '#1e3a8a',
        'primary-dark': '#172554',
        secondary: '#b91c1c',
        accent: '#d97706',
        bgLight: '#f3f4f6',
      },
    },
  },
  plugins: [],
}