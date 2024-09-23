import type { Config } from "tailwindcss";

const config: Config = {
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
        theme_red: "#FF0000",
        theme_dark_grey: "#252525",
        theme_light_grey: "#414141",
        theme_dark_red: "#AF0404",
      },
    },
  },
  plugins: [],
};
export default config;
