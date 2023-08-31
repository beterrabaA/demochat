import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          150: '#3A3A3A',
          251: '#e5e5ea',
        },
        blue: {
          111: '#0000EE',
        },
      },
    },
  },
  plugins: [],
}
export default config
