/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a202c',
        steel: '#4a5568',
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}