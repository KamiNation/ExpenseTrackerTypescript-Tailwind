/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#4b4b4b",
        customSlate: "#3a3a3a",
        customPurple: "#40005d",
        customLightGray: "#ececec",
        customDarkGray: "#2a2a2a",
        customLightPurple: "#f8dfff",
        customDarkgray: "#313131",
        customLightpurple: "#c3b4f3",
        customPurpleShade: "#4826b9",
        customColor: "#ccc",
        customBgColor: "#a892ee",
        customPurpleBgColor: "#370053",
        customBgGray: "#373737"
      },
      fontSize: {
        '1.5xl': "1.5rem"
      },
      width: {
        "custom-50rem": "50rem"
      },
      maxWidth: {
        "custom-95%": "95%"
      },
      boxShadow: {
        "custom": '0 1px 8px rgba(0, 0, 0, 0.25)'
      }
    },
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '481px', 'max': '650px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '651px', 'max': '768px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '768px', 'max': '1024px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1024px' },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}