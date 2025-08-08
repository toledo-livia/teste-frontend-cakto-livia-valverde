/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
      },
      dropShadow: {
        "neon-glow": "0 0 5px rgba(57, 255, 20, 0.7)",
      },
      keyframes: {
        "neon-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(57, 255, 20, 0.7))" },
          "50%": { filter: "drop-shadow(0 0 15px rgba(57, 255, 20, 1))" },
        },
      },
      animation: {
        "neon-pulse": "neon-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
