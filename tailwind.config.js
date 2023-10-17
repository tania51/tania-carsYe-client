/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night"],
    theme: 
    {
      fontFamily: {
        'open' : ['Open Sans', 'sans-serif']
      },
    },
    
    
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

