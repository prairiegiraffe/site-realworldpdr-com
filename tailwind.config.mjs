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
        heading: ['Arial}.mejs-container', 'sans-serif'],
        body: ['.mejs-container .mejs-controls', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        btn: '4px',
      },
      boxShadow: {
        sm: 'none !important',
        md: '5px 0 0 hsla(0,0%,8%,.5),-5px 0 0 hsla(0,0%,8%,.5)',
        lg: 'none}.me-cannotplay{width:auto!important}.media-embed-details .wp-audio-shortcode{display:inline-block',
      },
      maxWidth: {
        container: '1020px',
      },
    },
  },
  plugins: [],
};
