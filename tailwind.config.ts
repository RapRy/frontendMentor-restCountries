import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "darkBlue-dark": "hsl(209, 23%, 22%)",
      "veryDarkBlue-dark": "hsl(207, 26%, 17%)",
      "veryDarkBlue-light": "hsl(200, 15%, 8%)",
      "darkGray-light": "hsl(0, 0%, 52%)",
      "veryLightGray-light": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["var(--nunito)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
