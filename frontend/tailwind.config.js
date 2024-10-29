/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#09090b"
        },
        input: {
          DEFAULT: "#27272a"
        },
        button: {
          DEFAULT: "#fafafa"
        },
        primary: {
          500: "#646cff"
        },
        secondary: {
          400: "#242424",
          500: "#1a1a1a"
        },
        green: {
          500: "#22c55e"
        },
        red: {
          500: "#e11d48"
        }
      }
    },
  },
  plugins: [],
}
