/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        medium: '#e2e8f0',
        mediumDark: '#cbd5e1',
        dark: '#475569',
        darker: '#1e293b',
      },
      yellow: {
        medium: '#C1C70E',
      },
      black: {
        dark: '#333333',
      },
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
};
