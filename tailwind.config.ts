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
        lightGray: "#BCBCBC",
        mediumGray: "#8C8C8C",
        darkGray: "#505050",
        extremelyDarkGray: "#2E2E2E",
        primary: "#111",
        secondary: "#fff",
      },
      container: {
        center: true,
      },
      screens: {
        xs: "500px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",

          secondary: "#111111",

          accent: "#ffffff",

          neutral: "#ffffff",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#00ffff",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
