/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
      primary: {
        100: '#f1730c',
        200: '#f1730cca'
      },
      secondary: {
        100: '#1d2026',
        200: '#2c2d2ea6'
      },
      fontFamily: {
        body: ['Arial, Helvetica, sans-serif']
      }
    }},
  },
  plugins: [],
}
