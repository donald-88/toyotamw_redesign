module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#c2c4c3',
        'custom-gray': '#7e7e7e',
        'custom-darkGray': '#1e1e1e'
      },
      zIndex: {
        'negative': -1,
        'negativeTwo': -2
      },
      fontFamily: {
        'riviera': ['RivieraNights']
      }
    },
  },
  plugins: [],
}
