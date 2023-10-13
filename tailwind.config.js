/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        accent: '#C55258',
      },
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'amb': '82rem',
      }
    },
  },
  plugins: [],
}