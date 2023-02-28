const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: true,
	theme: {
		extend: {},
		colors: {
			gray: {
				...colors.gray,
				DEFAULT: "#B3B3B3",
				300: "#8C8FA0",
			},
			blue: {
				...colors.blue,
				DEFAULT: "#520BFF",
			},
			white: {
				DEFAULT: "#FFFFFF",
			},
		},
		height: {
			7: "24px",
			13: "52px",
			18: "72px",
			32: "128px",
			52: "206px",
		},

		fontSize: {
			"2xs": "10px",
			"3xs": "8px",
			xs: "12px",
			md: "13px",
			xl: "20px",
			xxl: "28px",
			"2xxl": "32px",
		},
	},

	plugins: [],
};
