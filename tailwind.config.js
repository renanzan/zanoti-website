/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/templates/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			sm: '412px',
			md: '768px',
			lg: '1366px',
			xl: '1920px',
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			"roboto-mono": ['Roboto Mono', 'monospace']
		},
		extend: {
			colors: {
				primary: '#6EF2A3',
				background: {
					DEFAULT: "#25262A",
					light: "#2D2E32"
				},
				white: {
					DEFAULT: "#FFFFFF",
					600: "rgba(255, 255, 255, 0.6)"
				}
			}
		}
	},
	plugins: [],
}
