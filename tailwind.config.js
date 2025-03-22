/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./pages/*.html"],
  theme: {
    extend: {


      screens: {
        '500-md': { max: '500px' }, // Applies to screens smaller than 640px
        '800-md': { max: '800px' }, // Applies to screens smaller than 768px
        '1000-md': { max: '1000x' }, 
        '1300-md': { max: '1300px' }, 
        '700-hmd': {'raw' : '(max-height:700px)'},
      },
    },
  },
  plugins: [],
}

