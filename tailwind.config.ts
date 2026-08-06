import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#475569",
          foreground: "#FAFAFA",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#0F172A",
        },
        border: "#E2E8F0",
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        dark: {
          bg: "#0B1120",
          surface: "#111827",
          border: "#1E293B",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 8px 30px -8px rgba(15, 23, 42, 0.12)",
        lift: "0 20px 50px -12px rgba(15, 23, 42, 0.25)",
        glow: "0 0 0 1px rgba(245, 158, 11, 0.15), 0 8px 30px -8px rgba(245, 158, 11, 0.25)",
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "blueprint-dark":
          "linear-gradient(rgba(245,158,11,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
        "grid-sm": "24px 24px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(4deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
