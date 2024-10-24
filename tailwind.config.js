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
        'removecouple': "url('./img/removecouple.JPG')",
        'couple': "url('./img/couple.JPG')",
        'informatie': "url('./img/informatie.JPG')",
        'diensten': "url('./img/diensten.JPG')",
        'kennismaken': "url('./img/kennismaken.JPG')",
        'boksen': "url('./img/boksen.JPG')",
        'emotiegevoel': "url('./img/emotiegevoel.JPG')",
        'grenzenherkennen': "url('./img/grenzenherkennen.JPG')",
        'gedrag': "url('./img/gedrag.JPG')",
        'evaluatie': "url('./img/evaluatie.JPG')",
      },
      ringColor: {
        black: '#000', // Custom black outline color for focus
      },
    },
  },
  variants: {
    extend: {
      outline: ['focus'], // Ensure focus outline is applied
      ring: ['focus'],     // Ensure focus ring is applied
    },
  },
  plugins: [],
};
