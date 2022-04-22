import { rem } from 'polished'

export const Breakpoints = {
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
