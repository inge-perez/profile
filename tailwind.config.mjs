/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
			center: true,
      padding: '1rem',
			screens: {
        xl: '1280px'
			}
		},
    extend: {},
	},
  plugins: [],
};
