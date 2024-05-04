import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"bebas-neuen": "bebas",
			},
			fontSize: {},
			fontWeight: {},
			lineHeight: {},
			borderRadius: {},
			colors: {
				"neon-green": "#d5ff3f",
				"black-blue": "#161b22",
				"dark-blue": "#242938",
				"coder-house": "#EAFE69",
			},
			spacing: {},
			width: {},
			minWidth: {},
			maxWidth: {},
			height: {},
			minHeight: {},
			maxHeight: {},
		  },
	},
	plugins: [
		animations,
	],
}
