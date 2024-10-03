/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.{html,js}"],
  theme: {
    extend: {
      colors:{
        'to': 'hsl(0, 74%, 74%)',
        'from': 'hsl(0, 80%, 86%)',
        'DesaturatedRed': 'hsl(0, 36%, 70%)',
        'SoftRed': 'hsl(0, 93%, 68%)',
      }
    },
  },
  plugins: [],
}

