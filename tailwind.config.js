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
      },
      zIndex: {
        'negative': -1
      },
      fontFamily: {
        'riviera': ['RivieraNights']
      }
    },
  },
  plugins: [],
}
