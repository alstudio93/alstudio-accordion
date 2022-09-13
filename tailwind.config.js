/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '2px 2px 10px -2px rgb(228, 228, 228)',
      },
      fontSize: {
        'h1': 'clamp(2rem, 7vw, 4rem)',
        'accordion-question': 'clamp(1.1rem, 3vw, 1.2rem)',
        'accordion-answer': 'clamp(.95rem, 5vw, 1.1rem)'
      },
      fontFamily: {
        'nunito': 'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        'quicksand': 'Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}