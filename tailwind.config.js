/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dbfbd3',
          200: '#b6f8a7',
          300: '#92f47c',
          400: '#6df150',
          500: '#49ed24',
          600: '#3abe1d',
          700: '#2c8e16',
          800: '#1d5f0e',
          900: '#0f2f07'
        },
        neutral: {
          100: '#e5e8eb',
          200: '#cbd1d7',
          300: '#b9c2ca',
          400: '#a2adb9',
          500: '#8b96a2',
          600: '#74808b',
          700: '#5d6974',
          800: '#424d57',
          900: '#28333e'
        }
      }
    }
  },
  plugins: []
}
