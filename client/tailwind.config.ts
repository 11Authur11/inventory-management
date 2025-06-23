import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

// Your original custom tokens
const tokens = {
  grey: {
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
  greenAccent: {
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
  redAccent: {
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
  blueAccent: {
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
};

// Automatically invert shade levels
const shadeMapping: Record<string, string> = {
  100: "900",
  200: "800",
  300: "700",
  400: "600",
  500: "500", // central stays same
  600: "400",
  700: "300",
  800: "200",
  900: "100",
};

// Invert theme shades
const generateThemeObject = (inputTokens: any, invert = false) => {
  const theme: any = {};
  for (const [colorName, shades] of Object.entries(inputTokens)) {
    theme[colorName] = {};
    for (const [shade, value] of Object.entries(shades as Record<string, string>)) {
      const mappedShade = invert ? shadeMapping[shade] : shade;
      theme[colorName][shade] = (inputTokens as any)[colorName][mappedShade];
    }
  }
  return theme;
};

const darkTheme = generateThemeObject(tokens);
const lightTheme = generateThemeObject(tokens, true);

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
