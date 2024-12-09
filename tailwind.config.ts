import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: "#27374D",
        bgsecondary: "#526D82",
        fgprimary: "#DDE6ED",
        fgsecondary: "#9DB2BF"
      },
      fontFamily: {
        'oswald': ["Oswald", "serif"],
        'source': ['Source Serif Pro', 'sans-serif'],
        'luckiest' : ["Luckiest Guy", 'serif']
      },
      screens: {
        zero: '0px'
      }
    },
  },
  plugins: [],
};
export default config;
