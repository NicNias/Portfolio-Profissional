import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "camadas de circuito" — tinta profunda + acento cobre/solda.
        ink: {
          DEFAULT: "#0B0F19",
          elevated: "#121828",
          soft: "#1A2236",
        },
        paper: "#F1EEE6",
        muted: "#8A93AC",
        copper: {
          DEFAULT: "#E8A33D",
          soft: "#F2C077",
        },
        teal: {
          DEFAULT: "#3FA796",
          soft: "#6FC4B6",
        },
        line: "#242D45",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
