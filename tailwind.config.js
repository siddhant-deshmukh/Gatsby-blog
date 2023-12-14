/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'main': '#171c28',
        'primary': 'white',
        'primary-light-1' : 'rgb(249 250 251)',
        'primary-light-2' : 'rgb(243 244 246)',
        'primary-light-3' : 'rgb(229 231 235)',
        // secondary: '#66fcf2'
        // secondary: '#007bff',
        'secondary': '#00f8f8',
        'secondary-1': '#00baba',
        'secondary-2': '#007c7c',
        'secondary-3': '#003e3e',



        // "primary": '#ffffff',
        "secondary": '#66fcf2',
        "base-1": '#0b0c10',
        // base: '#222831',

        "base2": '#393E46',
        "secondary-2": '#46a29f',

        // "main": "#0b0c10",


        // "primary": "#000000",
        "primary-2": "rgb(107 114 128)",
        "primary-3": "rgb(75 85 99)",
        "primary-4": "rgb(55 65 81)",
        "primary-5": "rgb(31 41 55)",
        "primary-6": "rgb(17 24 39)",

        "secondary-d": "rgba(0, 23, 31)",
        "secondary-l": "rgb(2, 63, 106)",
        "secondary-d-2": "#01263c",

        "light-1": "",
        "light-2": "rgb(241 245 249)", //slate-100
        "light-3": "rgb(229 231 235)", //gray-200
        "light-4": "rgb(209 213 219)", // gray-300 
        "light-5": "rgb(156 163 175)", // gray-500


      }
    },
  },
  plugins: [],
}

