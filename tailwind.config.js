/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fixColor': {
          23: '#ffffff',
          24: '#fafafa'
        }
      }
    },
  },
  plugins: [],
}
