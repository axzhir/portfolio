/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#1A1A1A',
          secondary: '#252525',
          card: '#1F1F1F'
        },
        accent: {
          primary: '#A855F7',
          secondary: '#FF0077'
        }
      }
    },
  },
  plugins: [],
};