/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import * as themes from "daisyui/src/theming/themes";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      redressed: ["Redressed", "cursive"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,

          primary: "#040816",
          secondary: "#EFB51F",
          neutral: "#040816", //background color
          "base-content": "white", //Text color
          background: "url('/src/assets/herobg.png')",
        },
        light: {
          ...themes.light,

          primary: "#040F75",
          secondary: "#0BBAB5",
          neutral: "#E6F0ED",
          "base-content": "#016D48",
          background: "#F8FCFB",
        },
      },
    ],
  },
};
