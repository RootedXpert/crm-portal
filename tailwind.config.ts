import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        primary: "var(--brand-primary-color)",
        secondary: "var(--brand-secondary-color)",
        accent: "var(--brand-accent-color)",
        border: "var(--brand-border-color)",
      },
      fill: {
        color: "var(--brand-primary-text-color)",
        secondary: "var(--brand-secondary-text-color)",
      },
      textColor: {
        primary: "var(--brand-primary-text-color)",
        secondary: "var(--brand-secondary-text-color)",
        accent: "var(--brand-accent-text-color)",
        warn: "var(--brand-warn-color)",
        alert: "var(--brand-alert-color)",
        hover: "var(--brand-hover-text-color,#495057)",
      },
      boxShadow: {
        brand: "var(--brand-box-shadow)",
      },
      backgroundColor: {
        card: "var(--brand-card-color)",
        color: "var(--brand-background-color)",
        primary: "var(--brand-primary-color)",
        secondary: "var(--brand-secondary-color)",
        warn: "var(--brand-warn-color)",
        alert: "var(--brand-alert-color)",
        overlay: "rgba(0,0,0,.4)",
        hover: "var(--brand-hover-color,#f8f9fa)",
        table: "var(--brand-table-color,#eff2f7)",
      },
      fontFamily: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
export default config;
