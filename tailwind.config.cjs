module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}", // all Astro pages/components
    "./src/styles/global.css"                // include your CSS for any @apply usage
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0B0C10',
        primary: '#E94560',
        secondary: '#1F2833',
        text: '#C5C6C7',
        highlight: '#66FCF1',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
};