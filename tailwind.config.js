/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter Tight', 'sans-serif'],
      },
      colors: {
        'bone': '#f9f6ee',
      },
    },
  },
  plugins: [],
}