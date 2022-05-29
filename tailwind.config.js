module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        110: '30rem',
      },
      colors: {
        secondary: '#eaeae7',
        primary: '#222222',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
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
