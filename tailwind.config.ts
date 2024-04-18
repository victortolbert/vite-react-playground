import tailwindTypography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
    },
    extend: {
      colors: {
        neutral: '#d2cfdc',
        primary: {
          50: '#f1f4ff', // rgb(241, 244, 255)
          100: '#e5e8ff', // rgb(229, 232, 255)
          200: '#ced5ff', // rgb(206, 213, 255)
          300: '#a7b1ff', // rgb(167, 177, 255)
          400: '#767fff', // rgb(118, 127, 255) // Royal blue
          500: '#3f42ff', // rgb(63, 66, 255)
          600: '#2118ff', // rgb(33, 24, 255)
          700: '#1007fa', // rgb(16, 7, 250)
          800: '#0d05d2', // rgb(13, 5, 210) // Dark blue
          900: '#0c06ac', // rgb(12, 6, 172)
          950: '#000058', // rgb(0, 0, 88)
        },
      },
    },
  },
  plugins: [tailwindTypography],
} satisfies Config
