/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your file structure
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0D17',
        'neon-purple': '#8A2BE2',
        'lavender': '#D8B4FE',
        'muted-gray': '#B0B0B0',
      },
      boxShadow: {
        'neon': '0 0 10px #8A2BE2, 0 0 20px #8A2BE2',
        'glow': '0 0 15px 5px rgba(138, 43, 226, 0.5)',
      },
      borderRadius: {
        'lg': '20px',
      },
      gradientColorStops: {
        'start': '#8A2BE2',
        'end': '#0B0D17',
      },
    },
  },
  plugins: [],
}
