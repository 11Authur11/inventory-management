import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// Base Tailwind color families to support
const baseColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

// Define the shade levels
const shadeKeys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

// High contrast inversion mapping for dark mode
const highContrastMapping: Record<string, string> = Object.fromEntries(
  shadeKeys.map((shade, i) => {
    const offset = 4; // Increase contrast by shifting deeper into the scale
    const targetIndex = Math.min(i + offset, shadeKeys.length - 1);
    return [shade, shadeKeys[shadeKeys.length - 1 - targetIndex]];
  })
);

// Generate themed color object
const generateThemeObject = (
  palette: typeof colors,
  mapping: Record<string, string>,
  invert = false
) => {
  return Object.fromEntries(
    baseColors.map((color) => [
      color,
      Object.fromEntries(
        shadeKeys.map((shade) => {
          const mapped = invert ? mapping[shade] : shade;
          // Cast color and mapped to their respective key types
          return [
            shade,
            palette[color as keyof typeof colors][mapped as keyof typeof colors["gray"]],
          ];
        })
      ),
    ])
  );
};

// Generate both themes
const lightTheme = generateThemeObject(colors, highContrastMapping);
const darkTheme = generateThemeObject(colors, highContrastMapping, true);

// Final themes with extra contrast adjustments
const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
    black: "#000000",
    background: colors.gray["50"],
    foreground: colors.gray["900"],
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"], // dark bg
    black: colors.gray["50"],  // light text
    background: colors.gray["950"],
    foreground: colors.gray["100"],
  },
};

// Tailwind configuration
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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
