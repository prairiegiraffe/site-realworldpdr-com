/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#720eec',
        secondary: '#e9e6ed',
        accent: '#61ce70',
        background: '#ffffff',
        text: '#1f2937',
      },
      fontFamily: {
        heading: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        btn: '4px',
      },
      maxWidth: {
        container: '1020px',
      },
    },
  },
  plugins: [],
};
