/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary:"#601800",
      F:"#FFF",
      },
      fontFamily:{
        Sue: ['Sue Ellen Francisco', "cursive"],
        Poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

