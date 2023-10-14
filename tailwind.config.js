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
      },
      boxShadow: {
        'innerlight': 'inset 0 2px 0 0 rgba(255,255,255,0.15)'
      }
    },
  },
  plugins: [],
}