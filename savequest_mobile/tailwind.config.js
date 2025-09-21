/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#00D4D4',
        accent: '#FF8C42',
        text: '#FFFFFF99',
      },
      boxShadow: {
        custom: "8px 8px 0 0 rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
}