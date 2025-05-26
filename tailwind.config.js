const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'brand-deep-space': '#0A0F1F',
        'brand-midnight': '#10182F',
        'brand-slate': '#1F2937',
        'brand-light-slate': '#374151',
        'brand-accent': '#22D3EE',
        'brand-accent-dark': '#0E7490',
        'brand-text-primary': '#F0F4F8',
        'brand-text-secondary': '#9CA3AF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
        slideInFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '5ch' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' },
        },
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 4s infinite ease-in-out',
        'slide-in-fade': 'slideInFade 0.7s ease-out forwards',
        'gradient-flow': 'gradientFlow 10s ease infinite',
        rotate: 'rotate 20s infinite linear',
        typing: 'typing 2s steps(5, end) forwards',
        blink: 'blink 1s step-end infinite',
      },
      boxShadow: {
        'glow-accent': '0 0 15px 5px rgba(34, 211, 238, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [nextui()],
};
