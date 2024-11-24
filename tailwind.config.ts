import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C1515',
        secondary: '#191E24',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
}
export default config
