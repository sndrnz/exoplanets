import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#309f92",
          "50": "#f2fbf9",
          "100": "#d4f3ed",
          "200": "#a8e7db",
          "300": "#75d3c3",
          "400": "#49b8a9",
          "500": "#309f92",
          "600": "#237e75",
          "700": "#20655f",
          "800": "#1e514e",
          "900": "#1d4442",
          "950": "#0b2827",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
