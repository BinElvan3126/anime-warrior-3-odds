/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aw3: {
          bg: "#090B13",
          surface: "#141824",
          surface2: "#1A2030",
          purple: "#A855F7",
          pink: "#EC4899",
          gold: "#FBBF24",
          muted: "#A1A1AA",
        },
      },
      boxShadow: {
        aura: "0 0 38px rgba(168, 85, 247, 0.22)",
        card: "0 18px 42px rgba(0, 0, 0, 0.26)",
      },
    },
  },
  plugins: [],
};
