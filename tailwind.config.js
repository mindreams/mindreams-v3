/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/src/assets/images/bg_padded.png')",
        "bg-md": "url('/src/assets/images/bg.png')",
      },
    },
  },
  plugins: [],
}
