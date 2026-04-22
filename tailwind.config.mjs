/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#E5CA00',
        dark: '#000000',
        'gray-body': '#6A6865',
        'gray-light': '#32373c',
        'bg-dark': 'rgba(32, 7, 7, 0.8)',
      },
      fontFamily: {
        heading: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
};
