/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors:{
        first: '#bbf7d0',second: '#f5d0fe',third: '#ccfbf1', fouth:'#d8b4fe', fifth: '#f9a8d4',sixth:'#fce7f3',seventh:'#fecdd3',last:'#99f6e4',black:'#111315',back:'#2d2d2d'

      },
    },
  },
  plugins: [],
};
