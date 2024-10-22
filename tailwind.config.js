/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#EFB667',
          2: '#856325',
          3: '#A86F25',
          4: '#2A1F1F'
        },

      }
    },
  },
  plugins: [],
}

