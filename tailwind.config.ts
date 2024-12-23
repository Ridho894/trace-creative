import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "8xl": "1280px",
      "7xl": "1280px",
      "6xl": "1200px",
      "5xl": "1120px",
      "4xl": "1040px",
      "3xl": "960px",
      "2xl": "880px",
      xl: "800px",
      lg: "720px",
      md: "640px",
      sm: "480px",
    },
    fontSize: {
      h1: "48px",
      h2: "40px",
      h3: "32px",
      h4: "24px",
      h5: "20px",
      h6: "18px",
      sub1: "16px",
      sub2: "14px",
      sub3: "12px",
      sub4: "10px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
