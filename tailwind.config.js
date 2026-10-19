/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          DEFAULT: '#183653',
          50: '#f0f5fa',
          100: '#dbe7f2',
          200: '#b8d0e5',
          300: '#86b1d4',
          400: '#528ec0',
          500: '#3272a7',
          600: '#235987',
          700: '#1c476d',
          800: '#183653',
          900: '#0f2337',
          950: '#091624'
        },
        'dusty-rose': {
          DEFAULT: '#D99AA9',
          50: '#fbf5f6',
          100: '#f7ebed',
          200: '#f1d7dc',
          300: '#e6b9c2',
          400: '#D99AA9',
          500: '#c5788a',
          600: '#ad5a6e',
          700: '#904657',
          800: '#783b49',
          900: '#653540'
        },
        'ivory': {
          DEFAULT: '#F6F0E8',
          50: '#ffffff',
          100: '#faf7f3',
          200: '#F6F0E8',
          300: '#ede4d6',
          400: '#dfd1bb',
          500: '#cdba9e'
        },
        'champagne-gold': {
          DEFAULT: '#B69B73',
          light: '#d2bea0',
          dark: '#977d54'
        },
        'botanical-green': {
          DEFAULT: '#26392E',
          light: '#3c5847',
          dark: '#17241d'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'luxury': '0.35em'
      }
    },
  },
  plugins: [],
}
