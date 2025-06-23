import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// Custom color tokens for dark mode
const customDarkColors = {
  gray: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  primary: {
    100: "#ced5d6",
    200: "#9dabad",
    300: "#6d8285",
    400: "#3c585c",
    500: "#0b2e33",
    600: "#092529",
    700: "#071c1f",
    800: "#041214",
    900: "#02090a",
  },
  green: {
    100: "#dce5e6",
    200: "#b9cbcd",
    300: "#95b0b4",
    400: "#72969b",
    500: "#4f7c82",
    600: "#3f6368",
    700: "#2f4a4e",
    800: "#203234",
    900: "#10191a",
  },
  red: {
    100: "#e9eff0",
    200: "#d4e0e1",
    300: "#bed0d3",
    400: "#a9c1c4",
    500: "#93b1b5",
    600: "#768e91",
    700: "#586a6d",
    800: "#3b4748",
    900: "#1d2324",
  },
  blue: {
    100: "#f1f9fb",
    200: "#e3f4f6",
    300: "#d4eef2",
    400: "#c6e9ed",
    500: "#b8e3e9",
    600: "#93b6ba",
    700: "#6e888c",
    800: "#4a5b5d",
    900: "#252d2f",
  },
  white: "#ffffff",
  black: "#141414",
};

const customLightColors = {
  gray: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  primary: {
    100: "#02090a",
    200: "#041214",
    300: "#071c1f",
    400: "#f2f0f0", // manually changed
    500: "#0b2e33",
    600: "#3c585c",
    700: "#6d8285",
    800: "#9dabad",
    900: "#ced5d6",
  },
  green: {
    100: "#10191a",
    200: "#203234",
    300: "#2f4a4e",
    400: "#3f6368",
    500: "#4f7c82",
    600: "#72969b",
    700: "#95b0b4",
    800: "#b9cbcd",
    900: "#dce5e6",
  },
  red: {
    100: "#1d2324",
    200: "#3b4748",
    300: "#586a6d",
    400: "#768e91",
    500: "#93b1b5",
    600: "#a9c1c4",
    700: "#bed0d3",
    800: "#d4e0e1",
    900: "#e9eff0",
  },
  blue: {
    100: "#252d2f",
    200: "#4a5b5d",
    300: "#6e888c",
    400: "#93b6ba",
    500: "#b8e3e9",
    600: "#c6e9ed",
    700: "#d4eef2",
    800: "#e3f4f6",
    900: "#f1f9fb",
  },
  white: "#ffffff",
  black: "#141414",
};

const themes = {
  light: customLightColors,
  dark: customDarkColors,
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
// ...existing code...