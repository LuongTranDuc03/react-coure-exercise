/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dòng này quan trọng!
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), 
   require('daisyui')],
}

