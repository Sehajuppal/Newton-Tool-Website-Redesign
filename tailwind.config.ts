import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--color-ground)",
        raised: "var(--color-raised)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        "line-subtle": "var(--color-line-subtle)",
        ink: "var(--color-ink)",
        "ink-secondary": "var(--color-ink-secondary)",
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          ink: "var(--color-accent-ink)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "marquee-glide": "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
