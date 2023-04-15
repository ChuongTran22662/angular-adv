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
          24: '#fafafa',
          'icon': '#65676b',
          'bg-icon-right': '#e4e6eb'
        }
      },
      backgroundColor: {
        'default': '#fff',
        'search-header': '#f0f2f5',
      },
      fill: {
        'white': '#fff'
      }
    },
  },
  plugins: [],
}
