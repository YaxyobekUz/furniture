/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        br:{
          'primary-color':"#054C73",
          'primary-dark':"#054C73",
          'font-color':"#333333",
          'dark-color':"#111111",
          'light-dark-color':"#666666",
          'light-blue':"#F2F5FF",
          'hero-light-blue':"#DFE9F4"
        }
      },
    },
  },
  plugins: [],
}