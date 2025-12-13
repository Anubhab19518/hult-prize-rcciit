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
        heritage: '#EC2088',
        purple: '#8A2890',
        midnight: '#292563',
        blackish: '#191919',
        gallery: '#FFFFFF',
        sky: '#12B1E7',
        sun: '#FDD40E'
      },
      fontFamily: {
        figtree: ['var(--font-figtree)', 'sans-serif']
      },
      backgroundImage: {
        'cotton-candy': 'linear-gradient(90deg, #12B1E7 0%, #EC2088 100%)'
      }
    },
  },
  plugins: [],
};
export default config;