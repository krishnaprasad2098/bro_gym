/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm':'450px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px'

    },
    extend: {},
  },
  plugins: [],
}
