/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text: "hsl(var(--text))",
        bg: "hsl(var(--bg-color))",
        bgElements: "hsl(var(--bg-elements))"
      }
    },
  },
  plugins: [],

}

