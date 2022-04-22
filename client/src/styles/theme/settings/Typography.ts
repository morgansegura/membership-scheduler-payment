import { rem, em } from 'polished'

const font = {
	base: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	heading:
		'Merriweather Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

export const Typography = {
	fontBase: font.base,
	fontHeading: font.heading,
	fontSizeBase: rem(16),

	h1: {
		fontFamily: font.heading,
	},
	h2: {
		fontFamily: font.heading,
	},
	h3: {
		fontFamily: font.heading,
	},
	h4: {
		fontFamily: font.base,
	},
	h5: {
		fontFamily: font.heading,
	},
	h6: {
		fontFamily: font.heading,
	},

	body1: {
		fontFamily: font.base,
		fontSize: rem(16),
		lineHeight: em(16),
		fontWeight: 400,
	},

	body2: {
		fontFamily: font.base,
		fontSize: rem(16),
		lineHeight: em(16),
		fontWeight: 400,
	},

	subtitle1: {
		fontFamily: font.base,
		fontSize: rem(16),
		lineHeight: em(16),
		fontWeight: 600,
	},

	subtitle2: {
		fontFamily: font.base,
		fontSize: rem(12),
		lineHeight: em(20),
		fontWeight: 600,
	},

	button: {
		fontFamily: font.heading,
		lineHeight: em(21.44),
	},
}
