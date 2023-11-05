import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        secondary: "#000",
        tertiary: "#F4F3F1",
        text: "#B0AFAF",
      },
    },
  },
  plugins: [],
};
export default config;
