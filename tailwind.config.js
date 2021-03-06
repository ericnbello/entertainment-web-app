module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'darkBlue': '#10141E',
        'greyishBlue': '#5A698F',
        'semiDarkBlue': '#161D2F',
        'red': '#FC4747'
      },
    },
},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}