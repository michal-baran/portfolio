/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        accent: '0091CF',
      },
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}