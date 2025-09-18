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
          DEFAULT: "hsl(var(--wui-primary) / <alpha-value>)",
          foreground: "hsl(var(--wui-primary-foreground) / <alpha-value>)",
        },
        neutral: {
          DEFAULT: "hsl(var(--wui-neutral) / <alpha-value>)",
          foreground: "hsl(var(--wui-neutral-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--wui-success) / <alpha-value>)",
          foreground: "hsl(var(--wui-success-foreground) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--wui-danger) / <alpha-value>)",
          foreground: "hsl(var(--wui-danger-foreground) / <alpha-value>)",
        },
        informative: {
          DEFAULT: "hsl(var(--wui-informative) / <alpha-value>)",
          foreground: "hsl(var(--wui-informative-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--wui-muted) / <alpha-value>)",
          foreground: "hsl(var(--wui-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--wui-accent) / <alpha-value>)",
          foreground: "hsl(var(--wui-accent-foreground) / <alpha-value>)",
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
