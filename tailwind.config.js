/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '13': '208px'
      },
      width: {
        '30': '480px'
      },
      transitionProperty: {
        'height': 'height',
      },
      padding: {
        '3/4': '3px'
      },
      colors: {
        'app-grey': '#D9D9D9',
        'app-grey-2': '#C3C3C3',
        'app-grey-3': '#F8F8F8',
        'app-black': '#313131',
        'app-lime': '#CDF986'
      },
      minHeight: {
        '30': '480px'
      }
    },
  },
  plugins: [],
}
