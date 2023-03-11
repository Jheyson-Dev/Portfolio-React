/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-pink': '#eaa4a4',
        'main-green': '#add6d2',
        'secondary-pink': '#e07b7b',
        // 'main-black': '#212428',
        // 'main-blue': '#101c2e',
        // 'secondary-black': '#181A1D',
        // 'main-white': '#F2FAFF',
        // 'secondary-white': '#D0D9E4',
        // 'main-red': '#ff595a',
        // 'nose-blue': '#03345d',
        // 'nose-ama': '#e9a202',
      },
      fontFamily: {
        titulos: ['Passion One', 'sans-serif'],
      },
      screens: {
        'mini-cel': '320px',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
