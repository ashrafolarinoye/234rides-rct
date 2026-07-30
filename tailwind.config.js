/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#0B1220",
          light: "#121B2E",
          lighter: "#1A2540",
        },
        route: {
          DEFAULT: "#FFC53D",
          dim: "#B5892A",
        },
        signal: "#2BD576",
        ink: "#F5F3EC",
        slate: {
          DEFAULT: "#8A93A6",
          dark: "#5C6479",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-map":
          "linear-gradient(rgba(245,243,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,236,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "80%": { transform: "scale(1.8)", opacity: "0" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "dash-move": {
          to: { strokeDashoffset: -200 },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "dash-move": "dash-move 8s linear infinite",
      },
    },
  },
  plugins: [],
};
