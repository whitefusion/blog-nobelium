import { config } from "./lib/server/config";
import { FONTS_SANS, FONTS_SERIF } from "./consts";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./components/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: config.lightBackground || "#ffffff",
        },
        night: {
          DEFAULT: config.darkBackground || "#111827",
        },
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.75 },
          "100%": { opacity: 0.4 },
        },
      },
      animation: {
        iconLoading: "twinkle 0.8s linear infinite alternate",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
