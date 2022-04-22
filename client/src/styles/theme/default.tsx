// [Settings]
import {
	Breakpoints,
	Components,
	Direction,
	Mixins,
	Palette,
	Shadows,
	Shape,
	Spacing,
	Transitions,
	Typography,
	zIndex,
} from 'styles/theme/settings'

// [Interfaces]
import { Theme } from 'styles/config/interfaces/Theme'

const baseTheme: Theme = {
	breakpoints: {
		...Breakpoints,
	},
	shadows: {
		...Shadows,
	},
	shape: {
		...Shape,
	},
	spacing: {
		...Spacing,
	},
	components: { ...Components },
	mixins: { ...Mixins },
	transitions: {
		easing: {
			...Transitions.easing,
		},
		duration: {
			...Transitions.duration,
		},
	},
	zIndex: { ...zIndex },
	direction: Direction,
}

export const themeLight: Theme = {
	...baseTheme,
	palette: {
		...Palette.light,
	},
	typography: {
		...Typography,
		body1: {
			color: Palette.light.text.secondary,
		},
		body2: { color: Palette.light.text.secondary },
		subtitle1: { color: Palette.light.text.secondary },
		subtitle2: { color: Palette.light.text.secondary },
	},
}

export const themeDark: Theme = {
	...baseTheme,
	palette: {
		...Palette.dark,
	},
	typography: {
		...Typography,
		body1: {
			color: Palette.dark.text.secondary,
		},
		body2: { color: Palette.dark.text.secondary },
		subtitle1: { color: Palette.dark.text.secondary },
		subtitle2: { color: Palette.dark.text.secondary },
	},
}
