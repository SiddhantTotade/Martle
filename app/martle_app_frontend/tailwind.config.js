/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Playfair Display', 'serif'],
      para: ['Poppins', 'sans - serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.5rem'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}
