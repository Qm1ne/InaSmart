import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(98.5% 0.004 265)",
        ink: "#14123A",
        "ink-muted": "oklch(46% 0.012 265)",
        "ink-soft": "oklch(34% 0.015 265)",
        "ink-faint": "oklch(52% 0.012 265)",
        primary: "#1668C9",
        "primary-hover": "#0E4FA0",
        "primary-tint": "#E4F7FC",
        indigo: "#1B1259",
        "indigo-mid": "#241C6E",
        "blue-deep": "#123A82",
        cyan: "#25E0EF",
        "cyan-light": "#5CE1F2",
        blue: "#1E93E8",
        "on-gradient": "#0B1030",
        "badge-ink": "#0E6C93",
        "badge-ink-deep": "#0B4E6B",
        "blue-hairline": "#CDE9FB",
        hairline: "oklch(91% 0.008 265)",
        "hairline-soft": "oklch(93% 0.008 265)",
        "input-border": "oklch(86% 0.012 265)",
        surface: "oklch(96.5% 0.008 265)",
        "surface-soft": "oklch(97.5% 0.006 265)",
        "panel-blue": "oklch(97.8% 0.012 240)",
        hero: "#1B1259",
        "hero-mid": "#241C6E",
        "hero-end": "#123A82",
        "hero-border": "rgba(255,255,255,0.32)",
        whatsapp: "oklch(35% 0.1 150)",
        "whatsapp-tint": "oklch(94% 0.05 150)",
        "whatsapp-border": "oklch(80% 0.1 150)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "13": "3.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "22": "5.5rem",
      },
      borderRadius: {
        control: "10px",
        card: "14px",
        "card-lg": "18px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "zoom-in": {
          from: { opacity: "0", transform: "scale(0.96) translateY(10px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 180ms ease-out",
        "zoom-in": "zoom-in 260ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
