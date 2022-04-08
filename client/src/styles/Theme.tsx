import { text } from 'node:stream/consumers'
import { rem, rgba, darken, shade, tint } from 'polished'

export type ThemeTypes = {
	breakpoints: Object
	direction: 'ltr'
	components: Object
	palette: Object
	spacing: Object
	shape: Object
	mixins: Object
	shadows: Object
	typography: Object
	transitions: Object
	zIndex: Object
}

export interface ThemeInterface {
	theme: ThemeTypes
}

export const breakpoints = {
	values: {
		min: {
			xs: 0,
			sm: rem(640),
			md: rem(1024),
			lg: rem(1376),
			xl: rem(1800),
			xxl: rem(2096),
		},
		max: {
			xs: rem(480),
			sm: rem(639),
			md: rem(1023),
			lg: rem(1366),
			xl: rem(1799),
			xxl: rem(2256),
			offset: rem(2384),
		},
	},
}

// https://bareynol.github.io/mui-theme-creator/

export const colors = {
	light: {
		common: {
			black: '#000',
			white: '#fff',
		},
		background: {
			paper: '#fff',
			default: '#e4e4e7',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
		},
		primary: {
			light: '#fb7185',
			main: '#f43f5e',
			dark: '#e11d48',
		},
		secondary: {
			light: '#2dd4bf',
			main: '#14b8a6',
			dark: '#0d9488',
		},
		warning: {
			light: '#fdba74',
			main: '#fb923c',
			dark: '#f97316',
		},
		error: {
			light: '#C33333',
			main: '#b50000',
			dark: '#7E0000',
		},
		success: {
			light: '#37AB87',
			main: '#059669',
			dark: '#036949',
		},
		info: {
			light: '#4EDBF1',
			main: '#22d3ee',
			dark: '#1793A6',
		},
		grey: {
			50: '#fafafa',
			100: '#f4f4f5',
			200: '#e4e4e7',
			300: '#d4d4d8',
			400: '#a1a1aa',
			500: '#71717a',
			600: '#52525b',
			700: '#3f3f46',
			800: '#27272a',
			900: '#18181b',
			A100: '#f4f4f5',
			A200: '#e4e4e7',
			A400: '#a1a1aa',
			A700: '#3f3f46',
		},
		divider: rgba('#000', 0.12),
		action: {
			active: rgba('#000', 0.54),
			hover: rgba('#000', 0.04),
			hoverOpacity: 0.04,
			selected: rgba('#000', 0.08),
			selectedOpacity: 0.08,
			disabled: rgba('#000', 0.26),
			disabledBackground: rgba('#000', 0.12),
			disabledOpacity: 0.38,
			focus: rgba('#000', 0.12),
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
	dark: {
		common: {
			black: '#000',
			white: '#fff',
		},
		background: {
			paper: '#27272a',
			default: '#18181b',
		},
		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.7)',
			disabled: 'rgba(255, 255, 255, 0.5)',
			hint: 'rgba(255, 255, 255, 0.5)',
		},
		primary: {
			light: '#2dd4bf',
			main: '#14b8a6',
			dark: '#0d9488',
		},
		secondary: {
			light: '#fb7185',
			main: '#f43f5e',
			dark: '#e11d48',
		},
		warning: {
			light: '#fdba74',
			main: '#fb923c',
			dark: '#f97316',
		},
		error: {
			light: '#C33333',
			main: '#b50000',
			dark: '#7E0000',
		},
		success: {
			light: '#37AB87',
			main: '#059669',
			dark: '#036949',
		},
		info: {
			light: '#4EDBF1',
			main: '#22d3ee',
			dark: '#1793A6',
		},
		grey: {
			50: '#18181b',
			100: '#27272a',
			200: '#3f3f46',
			300: '#52525b',
			400: '#71717a',
			500: '#a1a1aa',
			600: '#d4d4d8',
			700: '#e4e4e7',
			800: '#f4f4f5',
			900: '#fafafa',
			A100: '#27272a',
			A200: '#3f3f46',
			A400: '#71717a',
			A700: '#e4e4e7',
		},
		divider: rgba('#000', 0.12),
		action: {
			active: rgba('#000', 0.54),
			hover: rgba('#000', 0.04),
			hoverOpacity: 0.04,
			selected: rgba('#000', 0.08),
			selectedOpacity: 0.08,
			disabled: rgba('#000', 0.26),
			disabledBackground: rgba('#000', 0.12),
			disabledOpacity: 0.38,
			focus: rgba('#000', 0.12),
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
	contrastThreshold: 3,
	tonalOffset: 0.04,
}

export const shadows = {
	0: 'none',
	1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
	2: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
	3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
	4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
	5: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
	6: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
	7: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
	8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
	9: '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
	10: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
	11: '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
	12: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
	13: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
	14: '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
	15: '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
	16: '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
	17: '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
	18: '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
	19: '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
	20: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
	21: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
	22: '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
	23: '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
	24: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
	25: '0px 1.4px 0.6px -45px rgba(0,0,0, 0.031), 0px 3.2px 1.5px -45px rgba(0,0,0, 0.045), 0px 5.8px 2.7px -45px rgba(0,0,0, 0.055), 0px 9.6px 4.5px -45px rgba(0,0,0, 0.065), 0px 15.9px 7.4px -45px rgba(0,0,0, 0.075), 0px 27.7px 12.9px -45px rgba(0,0,0, 0.089), 0px 60px 28px -45px rgba(0,0,0, 0.12)',
}

export const shape = {
	borderRadius: {
		none: 0,
		2: rem(2),
		4: rem(4),
		6: rem(6),
		8: rem(8),
		12: rem(12),
		16: rem(16),
		24: rem(24),
		circle: `9999px`,
	},
}

export const spacing = {
	unset: 'unset',
	auto: 'auto',
	0: '0px',
	px: '1px',
	0.5: '2px',
	1: '4px',
	1.5: '6px',
	2: '8px',
	2.5: '10px',
	3: '12px',
	3.5: '14px',
	4: '16px',
	4.5: '18px',
	5: '20px',
	6: '24px',
	7: '28px',
	8: '32px',
	9: '36px',
	10: '40px',
	11: '44px',
	12: '48px',
	14: '56px',
	16: '64px',
	20: '80px',
	22: '88px',
	24: '96px',
	28: '112px',
	30: '120px',
	32: '128px',
	36: '144px',
	40: '160px',
	44: '176px',
	48: '192px',
	52: '208px',
	56: '224px',
	60: '240px',
	64: '256px',
	72: '288px',
	80: '320px',
	96: '384px',
}

export const transitions = {
	easing: {
		easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
		easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
		sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
	},
	duration: {
		shortest: 150,
		shorter: 200,
		short: 250,
		standard: 300,
		complex: 375,
		enteringScreen: 225,
		leavingScreen: 195,
	},
}

export const typography = {
	h1: {
		fontFamily: 'Merriweather Sans',
	},
	h2: {
		fontFamily: 'Merriweather Sans',
	},
	h3: {
		fontFamily: 'Merriweather Sans',
	},
	h4: {
		fontFamily: 'Source Sans Pro',
	},
	h5: {
		fontFamily: 'Merriweather Sans',
	},
	h6: {
		fontFamily: 'Merriweather Sans',
	},

	fontFamilySans1:
		'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	fontFamilySans2:
		'Merriweather Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	fontSize: rem(16),

	body1: {
		fontFamily: 'Source Sans Pro',
		fontSize: '1rem',
		lineHeight: '1rem',
		fontWeight: 400,
	},

	body2: {
		fontFamily: 'Source Sans Pro',
		fontSize: '1rem',
		lineHeight: '1rem',
		fontWeight: 400,
	},

	subtitle1: {
		fontFamily: 'Source Sans Pro',
		fontSize: '1rem',
		lineHeight: '1rem',
		fontWeight: 600,
	},

	subtitle2: {
		fontFamily: 'Source Sans Pro',
		fontSize: '0.75rem',
		lineHeight: '1.25em',
		fontWeight: 600,
	},

	button: {
		fontFamily: 'Merriweather Sans',
		lineHeight: 1.34,
	},
}

export const themeLight: ThemeTypes = {
	palette: {
		...colors.light,
	},
	typography: {
		...typography,
		body1: {
			color: colors.light.text.secondary,
		},

		body2: { color: colors.light.text.secondary },
		subtitle1: { color: colors.light.text.secondary },
		subtitle2: { color: colors.light.text.secondary },
	},
	breakpoints: {
		...breakpoints,
	},
	shadows: {
		...shadows,
	},
	shape: {
		...shape,
	},
	spacing: {
		...spacing,
	},
	components: {},
	mixins: {},
	transitions: {
		easing: {
			...transitions.easing,
		},
		duration: {
			...transitions.duration,
		},
	},
	zIndex: {},
	direction: 'ltr',
}

export const themeDark: ThemeTypes = {
	palette: {
		...colors.dark,
	},
	typography: {
		...typography,
		body1: {
			color: colors.dark.text.secondary,
		},

		body2: { color: colors.dark.text.secondary },
		subtitle1: { color: colors.dark.text.secondary },
		subtitle2: { color: colors.dark.text.secondary },
	},
	breakpoints: {
		...breakpoints,
	},
	shadows: {
		...shadows,
	},
	shape: {
		...shape,
	},
	spacing: {
		...spacing,
	},
	components: {},
	mixins: {},
	transitions: {
		easing: {
			...transitions.easing,
		},
		duration: {
			...transitions.duration,
		},
	},
	zIndex: {},
	direction: 'ltr',
}
