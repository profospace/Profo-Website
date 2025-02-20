// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    testing: {
      center: true,
      padding: '20px',
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1200px'
      },
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
});