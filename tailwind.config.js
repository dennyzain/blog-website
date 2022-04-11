module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        110: '30rem',
      },
      colors: {
        'dark-mode': '#22272e',
        'dark-mode-secondary': '#373e47',
        'light-mode': '#efefef',
        'text-light-mode': '#24292f',
        'text-dark-mode': '#adbac7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
      animation: {
        slow: 'fade-Out .7s linear 1',
      },
      keyframes: {
        'fade-Out': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-In': {
          '0%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
