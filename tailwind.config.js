/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',  // Path to your pages directory
    './components/**/*.{js,jsx,ts,tsx}', // Path to your components directory
    './public/**/*.html' // If you have any HTML files in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
