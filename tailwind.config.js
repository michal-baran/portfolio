/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowSpin: 'spin 15s infinite linear'
      },
      colors: {
        bg: '#020916',
        accent: {DEFAULT: '#C55258', 500: '#e76163'}
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