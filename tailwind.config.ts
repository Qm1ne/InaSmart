import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(98% 0.004 250)",
        ink: "oklch(18% 0.02 260)",
        "ink-muted": "oklch(45% 0.01 260)",
        "ink-soft": "oklch(30% 0.01 260)",
        "ink-faint": "oklch(50% 0.01 260)",
        primary: "oklch(45% 0.14 265)",
        "primary-tint": "oklch(93% 0.03 265)",
        "primary-border": "oklch(85% 0.02 265)",
        accent: "oklch(45% 0.14 195)",
        "accent-tint": "oklch(93% 0.03 195)",
        "accent-kicker": "oklch(80% 0.1 195)",
        lime: "oklch(70% 0.16 195)",
        hairline: "oklch(90% 0.006 260)",
        "input-border": "oklch(85% 0.01 260)",
        surface: "oklch(96% 0.006 260)",
        hero: "oklch(18% 0.03 265)",
        "hero-deep": "oklch(15% 0.03 265)",
        "hero-border": "oklch(45% 0.02 260)",
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
        "8.5": "2.125rem",
        "22": "5.5rem",
      },
      borderRadius: {
        control: "10px",
        card: "14px",
        "card-lg": "18px",
      },
    },
  },
  plugins: [],
};

export default config;
