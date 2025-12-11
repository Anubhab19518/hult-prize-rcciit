/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        heritage: '#EC2088',
        purple: '#8A2890',
        midnight: '#292563',
        blackish: '#191919',
        gallery: '#FFFFFF',
        sky: '#12B1E7',
        sun: '#FDD40E'
      },
      backgroundImage: {
        'cotton-candy': 'linear-gradient(90deg,#12B1E7 0%, #EC2088 100%)'
      }
    },
  },
  plugins: [],
}
