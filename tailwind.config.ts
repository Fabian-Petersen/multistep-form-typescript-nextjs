import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        clampHeading: "clamp(1.5rem, 2vw, 2rem)",
        clampThankYou: "clamp(2.5rem, 2vw, 3.5rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
