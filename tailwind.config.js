/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#FAF7F2",
          card: "#FFFFFF",
          cream: "#F5EFE6",
          gold: "#C5A059",
          goldHover: "#A8833E",
          goldLight: "#F8F3EA",
          charcoal: "#1C1917",
          slate: "#44403C",
          muted: "#78716C",
          border: "#E7E5E4",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(197, 160, 89, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
