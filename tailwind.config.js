/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1C2949',
        mainColor: '#D6E1FA',
        card: 'rgba(255, 255, 255, 0.03)',
        accentGreen: '#11F4D1',
        blue7: '#22304D',
        cardCombined: 'rgb(37, 48, 77)',
      },
      fontSize: {},
      fontWeight: {},
      fontFamily: {
        ceraPro: 'Cera Pro',
      },
    },
    screens: {
      xxl: { max: '1920px' },

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
