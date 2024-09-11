/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0D17', // Very dark background
        'neon-purple': '#8A2BE2', // Neon purple accent
        'lavender': '#D8B4FE', // Soft lavender
        'muted-gray': '#B0B0B0', // Muted gray for subtle text
      },
      boxShadow: {
        'neon': '0 0 10px #8A2BE2, 0 0 20px #8A2BE2',
        'glow': '0 0 15px 5px rgba(138, 43, 226, 0.5)',
      },
      borderRadius: {
        'lg': '20px',
      },
      gradientColorStops: {
        'start': '#8A2BE2', // Starting point of gradient
        'end': '#0B0D17', // Ending point of gradient
      },
    },
  },
  plugins: [],
};

