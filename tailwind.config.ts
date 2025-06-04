import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(230, 65%, 45%)",
          foreground: "hsl(0, 0%, 98%)",
          50: "hsl(230, 65%, 95%)",
          100: "hsl(230, 65%, 90%)",
          200: "hsl(230, 65%, 80%)",
          300: "hsl(230, 65%, 70%)",
          400: "hsl(230, 65%, 60%)",
          500: "hsl(230, 65%, 45%)",
          600: "hsl(230, 65%, 40%)",
          700: "hsl(230, 65%, 35%)",
          800: "hsl(230, 65%, 30%)",
          900: "hsl(230, 65%, 25%)",
          950: "hsl(230, 65%, 15%)",
        },
        secondary: {
          DEFAULT: "hsl(10, 80%, 55%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 63%, 31%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 97%)",
          foreground: "hsl(215, 16%, 47%)",
        },
        accent: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(215, 16%, 32%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 28%, 17%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 28%, 17%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
