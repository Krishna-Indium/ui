/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,tsx,jsx}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {}
	},
	variants: {
		extend: {
			// Enable responsive variants for margin and padding utilities
			margin: ['responsive'],
			padding: ['responsive']
		}
	},
	plugins: []
}
