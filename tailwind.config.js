/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07070d",
          soft: "#10101a",
          card: "#161624",
        },
      },
      fontFamily: {
        sans: [
          "InterVariable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ['"Space Grotesk"', "InterVariable", "Inter", "sans-serif"],
        mono: [
          "ui-monospace",
          "SF Mono",
          "Menlo",
          "Cascadia Code",
          "monospace",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
