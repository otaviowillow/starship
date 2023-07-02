module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jediMaster: '#FFF',
        jediPadawan: '#F7F7F7',
        sithMaster: '#000408',
        sithApprentice: '#232524',
        darkSaber: '#FF6871',
        lightSaber: '#00A3FF',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
