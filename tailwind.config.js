/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E2FCD9CC',
          200: '#C0FAB4',
          300: '#94F08B',
          400: '#6BE26B',
          500: '#3ECF4C'
        },
        secondary: {
          100: '#FFF7D7CC',
          200: '#FFECB0',
          300: '#FFDF88',
          400: '#FFD26B',
          500: '#FFBD3A'
        },
        tertiary: {
          100: '#FEE8D2CC',
          200: '#FECAA5',
          300: '#FECAA5',
          400: '#F98256',
          500: '#F64920'
        },
        error: {
          'background': '#FCE3D1',
          'default': '#FF5C2B',
          'hover': '#DB3D1F',
          'pressed': '#B72315',
        },
        dark: {
          'disabled': '#3A354161',
          'secondary': '#333333AD',
          'primary': '#222325',
        },
        light: {
          'disabled': '#9D9EA1',
          'secondary': '#C1C2C4',
          'primary': '#FFFFFF',
        }
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        // 'serif': ['DM Sans', 'serif'],
      },
      width: {
        '6/13': '46.112%',
      }
    },
    plugins: [
      formsPlugin
    ],
  }
}
