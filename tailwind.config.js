/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				helvetica: ['Helvetica', 'Arial', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#4F46E5', // Indigo-600
					light: '#6366F1', // Indigo-500
					dark: '#4338CA', // Indigo-700
				},
				secondary: {
					DEFAULT: '#E5E7EB', // Gray-200
					light: '#FFFFFF', // White
					dark: '#D1D5DB', // Gray-300
				},
				accent: {
					DEFAULT: '#10B981', // Emerald-500
					light: '#34D399', // Emerald-400
					dark: '#059669', // Emerald-600
				},
				text: {
					primary: '#1F2937', // Gray-900
					secondary: '#4B5563', // Gray-700
				},
			},
		},
	},
	plugins: [],
};