/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'teko',
    },
    extend: {
      colors: {
        primary: '#F1F1F0',
        secondary: '#94C36B',
      },
      backgroundImage: {
        'removelogo': "url('./img/greenicon.png')",
        'removeweb': "url('./img/removeweb.png')",
        'removeLangweb': "url('./img/removebg.png')",
        'removecouple': "url('./img/removecouple.png')",
      }
    },
  },
  plugins: [],
}