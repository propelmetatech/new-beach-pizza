/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0077b6",
          primaryDark: "#00699f",
          secondary: "#c6282d",
          accent: "#f9c846",
          green: "#4f8f0b",
          blue: "#0077b6",
          red: "#c6282d",
          gold: "#f9c846",
          black: "#1e2428",
          cream: "#fff9ee",
          sand: "#f4e4c7"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 119, 182, 0.1)",
        float: "0 18px 40px rgba(30, 36, 40, 0.14)"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};
