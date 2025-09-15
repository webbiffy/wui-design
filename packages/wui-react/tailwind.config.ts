import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "wui-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--wui-border))",
        input: "hsl(var(--wui-input))",
        ring: "hsl(var(--wui-ring))",
        background: "hsl(var(--wui-background))",
        foreground: "hsl(var(--wui-foreground))",
        primary: {
          DEFAULT: "hsl(var(--wui-primary))",
          foreground: "hsl(var(--wui-primary-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--wui-neutral))",
          foreground: "hsl(var(--wui-neutral-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--wui-success))",
          foreground: "hsl(var(--wui-success-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--wui-danger))",
          foreground: "hsl(var(--wui-danger-foreground))",
        },
        informative: {
          DEFAULT: "hsl(var(--wui-informative))",
          foreground: "hsl(var(--wui-informative-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--wui-muted))",
          foreground: "hsl(var(--wui-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--wui-accent))",
          foreground: "hsl(var(--wui-accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--wui-radius)",
        md: "calc(var(--wui-radius) - 2px)",
        sm: "calc(var(--wui-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
