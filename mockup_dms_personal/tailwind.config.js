/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Prototype tokens (ht-portal-uat / eco-dms) — source of truth */
        primary: {
          DEFAULT: '#2b579a',
          hover: '#234a85',
          active: '#1c3d70',
        },
        brand: {
          boldblue: '#2b579a',
          cobaltblue: '#234a85',
          softdigital: '#4F6DFF',
          alucardnight: '#0B1028',
          softwhite: '#FAFAFA',
        },
        blue: {
          50: '#eef3f9',
          100: '#d6e3f1',
          200: '#adc7e3',
          300: '#7aa3cc',
          400: '#4d7bb3',
          500: '#2b579a',
          600: '#2b579a',
          700: '#234a85',
          800: '#1c3d70',
          900: '#143056',
        },
        indigo: {
          600: '#2b579a',
          700: '#234a85',
        },
        amber: {
          400: '#fac515',
        },
        sky: {
          100: '#e6fffb',
          700: '#08979c',
        },
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        base: ['14px', '22px'],
      },
    },
  },
  plugins: [],
}
