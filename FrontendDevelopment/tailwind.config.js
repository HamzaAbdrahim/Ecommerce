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
      scondary:"#807D7E",
      F:"#FFF",
      },
      fontFamily:{
        Sue: ['Sue Ellen Francisco', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        Italianno: ['Italianno', 'cursive'],
        Pacifico: ['Pacifico','cursive']
      }
    },
  },
  plugins: [],
}

