import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'sans'],
        instrument: ['var(--font-instrument)', 'sans'],
        inter: ['var(--font-inter)', 'sans'],
      }
    },
  },
  plugins: [],
} satisfies Config;
