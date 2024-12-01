import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#B2B0BC",
      },
      backgroundImage: {
        shadowImageLeft: "url('/assets/images/bg-left.svg')",
        shadowImageTop: "url('/assets/images/bg-top.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
