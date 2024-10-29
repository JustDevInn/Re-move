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
        primaryDark: '#E8E8E5', // Slightly darker version of primary
        secondary: '#94C36B',
      },
backgroundImage: {
  'removelogo': "url('/public/img/greenicon.png')",
  'removeweb': "url('/public/img/removeweb.png')",
  'removeLangweb': "url('/public/img/removebg.png')",
  'removecouple': "url('/public/img/removecouple.JPG')",
  'couple': "url('/public/img/couple.JPG')",
  'informatie': "url('/public/img/informatie.JPG')",
  'diensten': "url('/public/img/diensten.JPG')",
  'kennismaken': "url('/public/img/kennismaken.JPG')",
  'boksen': "url('/public/img/boksen.JPG')",
  'emotiegevoel': "url('/public/img/emotiegevoel.JPG')",
  'grenzenherkennen': "url('/public/img/grenzenherkennen.JPG')",
  'gedrag': "url('/public/img/gedrag.JPG')",
  'evaluatie': "url('/public/img/evaluatie.JPG')",
  'voorwaarden': "url('/public/img/voorwaarden.JPG')",
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
