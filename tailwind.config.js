/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        bgLight: '#f5f7fc',
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)',
        'danger-grad': 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
        'ok-grad': 'linear-gradient(135deg, #047857 0%, #059669 100%)',
        'sunset-grad': 'linear-gradient(135deg, #1e3a8a 0%, #4338ca 50%, #d97706 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,.05), 0 10px 26px -14px rgba(15,23,42,.14)',
        lift: '0 6px 12px rgba(15,23,42,.09), 0 22px 44px -20px rgba(15,23,42,.28)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}