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
        headline: 'rgba(var(--headline))',
        text: 'rgba(var(--text))',
        secondary: `rgba(var(--secondary))`,
        highlight: `rgba(var(--button))`
      },
      backgroundColor:{
        background: 'rgba(var(--background))',
        button: 'rgba(var(--button))',
        navbar: 'rgba(var(--sidebar))'
      },
      boxShadowColor:{
        shadow: 'rgba(var(--shadow))'
      },
      borderColor:{
        border: 'rgba(var(--border))'
      },
    },
  },
  plugins: [],
} satisfies Config;
