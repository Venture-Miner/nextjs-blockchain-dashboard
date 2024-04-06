import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundcolor: ['dark'],
      textcolor: ['dark']
    },
  },
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
      colors: {
        primary: {
          'light': "#1CD3F4",
          DEFAULT: '#077a8f',
          'dark': '#021F24'
        },
        cinder: {
          'light': "#202029",
          DEFAULT: "#14141f",
          'dark': '#000000',
        }
      }
    },
  },
  plugins: [],
};
export default config;
