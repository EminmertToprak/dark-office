import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        theme_red: '#FF0000',
        theme_dark_grey: '#252525',
        theme_light_grey: '#414141',
        theme_dark_red: '#AF0404',
      },
      backgroundImage: {
        'opacity-gradient': 'linear-gradient(to bottom, rgb(13, 17, 23) 0%, rgba(13, 17, 23, 0) 50%, rgb(13, 17, 23) 100%)',
      },

    },
  },
  plugins: [],
};
export default config;