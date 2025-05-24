/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#101218', // Darker background base
          text: '#E0E0E0',       // Slightly lighter text for contrast
          // Accents can be handled by existing Tailwind colors like blue-500, blue-400
        },
        // You can add more specific accent colors if needed
        // e.g., accent: '#00A8FF', 
      }
    },
  },
  plugins: [],
}
