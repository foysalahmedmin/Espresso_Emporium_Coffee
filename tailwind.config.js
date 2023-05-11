/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#372727',
        secondary_color: '#d2b48c',
        light_bg: '#f4f3f0'
      },
      fontFamily: {
        rancho: ['Rancho', 'cursive']
      }
    },
  },
  plugins: [],
}

