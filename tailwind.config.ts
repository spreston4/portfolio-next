import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "prim-dark": "#FC3314",
      "prim-light": "#FFD4D0",
      dark: "#1F1F1F",
      "dark-grey": "#8D8D8D",
      "medium-grey": "#E1E1E1",
      grey: "#F7F7F7",
      success: "#198754",
      warning: "#E68A00",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
