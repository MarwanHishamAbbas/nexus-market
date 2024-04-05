import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#0A0A0A",
      white: "#F0F0F0",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#0A0A0A", // or DEFAULT
            foreground: "#F0F0F0", // or 50 to 900 DEFAULT
            primary: {
              foreground: "#0A0A0A",
              DEFAULT: "#F0F0F0",
            },
            secondary: {
              foreground: "#F0F0F0",
              DEFAULT: "#0A0A0A",
            },
          },
          layout: {
            borderWidth: { small: "1px" },
          },
        },
      },
    }),
  ],
}
export default config
