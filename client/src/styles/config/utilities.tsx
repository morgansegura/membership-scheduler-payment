import { css } from 'styled-components'
import { em, rem } from 'polished'
import { string } from 'yup'

export const font = {
	base: '16px',
	family: {
		sans: `'Roboto', 'Graphik', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
		serif: `'Roboto', 'Graphik', 'Helvetica Neue', 'Helvetica', 'Arial', serif`,
		mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
	},
}

export const colors = {
	white: '#fff',
	black: '#000',
	slate50: '#f8fafc',
	slate100: '#f1f5f9',
	slate200: '#e2e8f0',
	slate300: '#cbd5e1',
	slate400: '#94a3b8',
	slate500: '#64748b',
	slate600: '#475569',
	slate700: '#334155',
	slate800: '#1e293b',
	slate900: '#0f172a',

	gray50: '#f9fafb',
	gray100: '#f3f4f6',
	gray200: '#e5e7eb',
	gray300: '#d1d5db',
	gray400: '#9ca3af',
	gray500: '#6b7280',
	gray600: '#4b5563',
	gray700: '#374151',
	gray800: '#1f2937',
	gray900: '#181d27',

	zinc50: '#fafafa',
	zinc100: '#f4f4f5',
	zinc200: '#e4e4e7',
	zinc300: '#d4d4d8',
	zinc400: '#a1a1aa',
	zinc500: '#71717a',
	zinc600: '#52525b',
	zinc700: '#3f3f46',
	zinc800: '#27272a',
	zinc900: '#18181b',

	neutral50: '#fafafa',
	neutral100: '#f5f5f5',
	neutral200: '#e5e5e5',
	neutral300: '#d4d4d4',
	neutral400: '#a3a3a3',
	neutral500: '#737373',
	neutral600: '#525252',
	neutral700: '#404040',
	neutral800: '#262626',
	neutral900: '#171717',

	stone50: '#fafaf9',
	stone100: '#f5f5f4',
	stone200: '#e7e5e4',
	stone300: '#d6d3d1',
	stone400: '#a8a29e',
	stone500: '#78716c',
	stone600: '#57534e',
	stone700: '#44403c',
	stone800: '#292524',
	stone900: '#1c1917',

	red50: '#fef2f2',
	red100: '#fee2e2',
	red200: '#fecaca',
	red300: '#fca5a5',
	red400: '#f87171',
	red500: '#ef4444',
	red600: '#dc2626',
	red700: '#b91c1c',
	red800: '#991b1b',
	red900: '#7f1d1d',

	orange50: '#fff7ed',
	orange100: '#ffedd5',
	orange200: '#fed7aa',
	orange300: '#fdba74',
	orange400: '#fb923c',
	orange500: '#f97316',
	orange600: '#ea580c',
	orange700: '#c2410c',
	orange800: '#9a3412',
	orange900: '#7c2d12',

	amber50: '#fffbeb',
	amber100: '#fef3c7',
	amber200: '#fde68a',
	amber300: '#fcd34d',
	amber400: '#fbbf24',
	amber500: '#f59e0b',
	amber600: '#d97706',
	amber700: '#b45309',
	amber800: '#92400e',
	amber900: '#78350f',

	yellow50: '#fefce8',
	yellow100: '#fef9c3',
	yellow200: '#fef08a',
	yellow300: '#fde047',
	yellow400: '#facc15',
	yellow500: '#eab308',
	yellow600: '#ca8a04',
	yellow700: '#a16207',
	yellow800: '#854d0e',
	yellow900: '#713f12',

	lime50: '#f7fee7',
	lime100: '#ecfccb',
	lime200: '#d9f99d',
	lime300: '#bef264',
	lime400: '#a3e635',
	lime500: '#84cc16',
	lime600: '#65a30d',
	lime700: '#4d7c0f',
	lime800: '#3f6212',
	lime900: '#365314',

	green50: '#f0fdf4',
	green100: '#dcfce7',
	green200: '#bbf7d0',
	green300: '#86efac',
	green400: '#4ade80',
	green500: '#22c55e',
	green600: '#16a34a',
	green700: '#15803d',
	green800: '#166534',
	green900: '#14532d',

	emerald50: '#ecfdf5',
	emerald100: '#d1fae5',
	emerald200: '#a7f3d0',
	emerald300: '#6ee7b7',
	emerald400: '#34d399',
	emerald500: '#10b981',
	emerald600: '#059669',
	emerald700: '#047857',
	emerald800: '#065f46',
	emerald900: '#064e3b',

	teal50: '#f0fdfa',
	teal100: '#ccfbf1',
	teal200: '#99f6e4',
	teal300: '#5eead4',
	teal400: '#2dd4bf',
	teal500: '#14b8a6',
	teal600: '#0d9488',
	teal700: '#0f766e',
	teal800: '#115e59',
	teal900: '#134e4a',

	cyan50: '#ecfeff',
	cyan100: '#cffafe',
	cyan200: '#a5f3fc',
	cyan300: '#67e8f9',
	cyan400: '#22d3ee',
	cyan500: '#06b6d4',
	cyan600: '#0891b2',
	cyan700: '#0e7490',
	cyan800: '#155e75',
	cyan900: '#164e63',

	sky50: '#f0f9ff',
	sky100: '#e0f2fe',
	sky200: '#bae6fd',
	sky300: '#7dd3fc',
	sky400: '#38bdf8',
	sky500: '#0ea5e9',
	sky600: '#0284c7',
	sky700: '#0369a1',
	sky800: '#075985',
	sky900: '#0c4a6e',

	blue50: '#eff6ff',
	blue100: '#dbeafe',
	blue200: '#bfdbfe',
	blue300: '#93c5fd',
	blue400: '#60a5fa',
	blue500: '#3b82f6',
	blue600: '#2563eb',
	blue700: '#1d4ed8',
	blue800: '#1e40af',
	blue900: '#1e3a8a',

	indigo50: '#eef2ff',
	indigo100: '#e0e7ff',
	indigo200: '#c7d2fe',
	indigo300: '#a5b4fc',
	indigo400: '#818cf8',
	indigo500: '#6366f1',
	indigo600: '#4f46e5',
	indigo700: '#4338ca',
	indigo800: '#3730a3',
	indigo900: '#312e81',

	violet50: '#f5f3ff',
	violet100: '#ede9fe',
	violet200: '#ddd6fe',
	violet300: '#c4b5fd',
	violet400: '#a78bfa',
	violet500: '#8b5cf6',
	violet600: '#7c3aed',
	violet700: '#6d28d9',
	violet800: '#5b21b6',
	violet900: '#4c1d95',

	purple50: '#faf5ff',
	purple100: '#f3e8ff',
	purple200: '#e9d5ff',
	purple300: '#d8b4fe',
	purple400: '#c084fc',
	purple500: '#a855f7',
	purple600: '#9333ea',
	purple700: '#7e22ce',
	purple800: '#6b21a8',
	purple900: '#581c87',

	fuscia50: '#fdf4ff',
	fuscia100: '#fae8ff',
	fuscia200: '#f5d0fe',
	fuscia300: '#f0abfc',
	fuscia400: '#e879f9',
	fuscia500: '#d946ef',
	fuscia600: '#c026d3',
	fuscia700: '#a21caf',
	fuscia800: '#86198f',
	fuscia900: '#701a75',

	pink50: '#fdf2f8',
	pink100: '#fce7f3',
	pink200: '#fbcfe8',
	pink300: '#f9a8d4',
	pink400: '#f472b6',
	pink500: '#ec4899',
	pink600: '#db2777',
	pink700: '#be185d',
	pink800: '#9d174d',
	pink900: '#831843',

	rose50: '#fff1f2',
	rose100: '#ffe4e6',
	rose200: '#fecdd3',
	rose300: '#fda4af',
	rose400: '#fb7185',
	rose500: '#f43f5e',
	rose600: '#e11d48',
	rose700: '#be123c',
	rose800: '#9f1239',
	rose900: '#881337',
}
export const sp = {
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
export const contain = {
	xs: '480px',
	sm: '639px',
	md: '1023px',
	lg: '1366px',
	xl: '1799px',
	xxl: '2256px',
	offset: '2384px',
}
export const device = {
	sm: '375px',
	md: '640px',
	lg: '1024px',
	xl: '1376px',
	xxl: '1800px',
	max: '2096px',
}
export const radius = {
	none: `0px`,
	sm: `0.125rem`,
	base: `0.25rem`,
	md: `0.375rem`,
	lg: `0.5rem`,
	xl: `0.75rem`,
	'2xl': `1rem`,
	'3xl': `1.5rem`,
	circle: `9999px`,
}
export const shadow = {
	sm: css`
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
	`,
	base: css`
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
	`,
	md: css`
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	`,
	lg: css`
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	`,
	xl: css`
		filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
	`,
	'2xl': css`
		filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	`,
	none: css`border-radius: filter: drop-shadow(0 0 #0000)`,
}

type GridProps = {
	rows?: string
	size?: string
	gutter?: string
	rowGap?: string
}

// Problems

// *. Parameter types: string, number, object
// *. Numbers types: 10 or '10' or '10px'

// *. Function needs to be able to take a sting and output a css key:value pair e.g. color="secondary.light"
// *. User can alternatively input an object of media queries, e.g.color={sm: 'red', md: 'primary.dark' lg:'#eee'}

export function filterObject(obj: any, item: string) {
	if (Object.keys(obj).includes(item)) {
		return obj[item]
	}
	return false
}

export function filterMap(arr: any, item: string) {
	arr.filter((a: string[], i: number) => {
		console.log(a[i])
		return arr[item]
	})
}

export function getPallette(obj: any, item: string) {
	const objItem = item.split('.')
	if (obj && Object?.keys(obj)?.includes(objItem[0])) {
		return obj[objItem[0]][objItem[1]]
	}
	// Not in pallette
	else if (obj && !Object.keys(obj).includes(objItem[0])) {
		// In base theme colors
		if (Object.keys(colors).includes(item)) {
			return colors[item]
		} else {
			return item
		}
	}
}

export function filterColorPallette(props: {}, item: string | {}) {
	if (item && typeof item === 'string') {
		return getPallette(props?.theme?.pallette, item)
	} else if (item && typeof item === 'object') {
		const colors = Object.entries(item).map((o: any, i: number) => {
			return [Object.keys(item)[i], getPallette(props?.theme?.pallette, Object.values(item)[i])]
		})
		return Object.fromEntries(colors)
	} else {
		return false
	}
}

export function getItemType(item: unknown) {
	return typeof item
}

export function translatePalletteColors(props: any, str: string) {
	if (!str.includes('.')) return
	let phrase = str.split(' ')

	Object.keys(props.theme.pallette).filter((color: string, i: number) => {
		if (String(phrase[i]).includes('.')) {
			const captureArr: string[] = []
			let captureStr: string[] = phrase[i].split('.')
			str = str.replace(phrase[i], props.theme.pallette[captureStr[0]][captureStr[1]])
		}
	})

	return str
}

// [Note] This only works for predefined colors
export function translateThemeColors(props: any, str: string) {
	const phrase = str.split(' ')

	Object.keys(colors).filter((color: string, i: number) => {
		if (!Object.keys(colors).includes(phrase[i])) return
		str = str.replace(phrase[i], colors[phrase[i]])
	})

	if (!phrase.length) return
	return str
}

export function translateColors(props: any, str: string) {
	if (translatePalletteColors(props, str)) {
		str = translatePalletteColors(props, str)
	}
	if (translateThemeColors(props, str)) {
		str = translateThemeColors(props, str)
	}

	return str
}

export function mediaQueries(props: any, collection: any, property: string, x: string = '') {
	switch (typeof collection) {
		case 'string':
			collection = translateColors(props, collection)
			return css`
				${{ [property]: `${collection}` }}
			`
			break
		case 'number':
			return css`
				${{ [property]: `${collection}px ${x}` }}
			`
			break
		case 'object':
			// collection = translateColors(props, collection)
			return Object.entries(collection).map(
				(o: any, i: number) =>
					css`
						@media screen and (min-width: ${props.theme.breakpoints.values[
								Object.keys(collection)[i]
							]}px) {
							${{ [property]: translateColors(props, o[1]) }}
						}
					`,
			)
			break
		default:
			return css`
				${{ [property]: `${collection} ${x}` }}
			`
			break
	}
}

export function mapMediaQueries(props: any, obj: any, property: string, x?: string) {
	if (property && typeof obj === 'string') {
		console.log(Object.keys(obj))
		return { [property]: Object.keys(obj)[1] + x }
	} else if (property && typeof obj === 'object') {
		return Object.entries(obj).map(
			(o, i) =>
				css`
					@media screen and (min-width: ${props.theme.breakpoints.values[Object.keys(obj)[i]]}px) {
						${{ [property]: o[1] }}
					}
				`,
		)
	}
}

// export const mapObject = (obj: any, key: string) => {
//   obj.map(o => o)
// }

export const grid: GridProps = (
	rows: string = '12',
	size: string = '1fr',
	gutter: string,
	rowGap: string,
) => {
	return css`
		display: grid;
		grid-template-columns: repeat(${rows}, ${size});
		column-gap: ${gutter || 'var(--grid-gutter)'};
		row-gap: ${rowGap || 'var(--grid-gutter)'};
	`
}

export const gridcolumn = (gc1: string, gc2: string) => {
	return css`
		grid-column: ${gc1} / ${gc2};
	`
}

export const fontSizing = (fontSize: string, lineHeight: string, fontWeight: number = 400) => {
	return css`
		font-size: ${rem(fontSize)};
		line-height: ${em(lineHeight)};
		font-weight: ${fontWeight};
	`
}

export const above = (amount: string): any => {
	return (...args: [any]): any => css`
		@media (min-width: ${amount}) {
			${css(...args)};
		}
	`
}

export const media: any = {
	sm: (...args: [any]): any => css`
		@media (min-width: ${device['sm']}) {
			${css(...args)};
		}
	`,
	md: (...args: [any]): any => css`
		@media (min-width: ${device['md']}) {
			${css(...args)};
		}
	`,
	lg: (...args: [any]): any => css`
		@media (min-width: ${device['lg']}) {
			${css(...args)};
		}
	`,
	xl: (...args: [any]): any => css`
		@media (min-width: ${device['lg']}) {
			${css(...args)};
		}
	`,
	xxl: (...args: [any]): any => css`
		@media (min-width: ${device['xl']}) {
			${css(...args)};
		}
	`,
}

export const container = {
	xs: css`
		max-width: ${contain.xs};
		margin-right: auto;
		margin-left: auto;
	`,
	sm: css`
		max-width: ${contain['sm']};
		margin-right: auto;
		margin-left: auto;
	`,
	md: css`
		max-width: ${contain['md']};
		margin-right: auto;
		margin-left: auto;
	`,
	lg: css`
		max-width: ${contain['lg']};
		margin-right: auto;
		margin-left: auto;
	`,
	xl: css`
		max-width: ${contain['xl']};
		margin-right: ${sp[2]};
		margin-left: ${sp[2]};

		${media.md`
			margin-right: ${sp[5]};
			margin-left: ${sp[5]};
		`}

		${media.xl`
			margin-right: ${sp[9]};
			margin-left: ${sp[9]};
		`}

		${media.xxl`
			margin-right: ${sp[20]};
			margin-left: ${sp[20]};
		`}

		${above(contain['offset'])`
			max-width: 2096px;
			margin-right: auto;
			margin-left: auto;
		`}
	`,
	xxl: css`
		max-width: ${contain['xxl']};
		margin-right: ${sp[1]};
		margin-left: ${sp[1]};

		${media.md`
			margin-right: ${sp[3]};
			margin-left: ${sp[3]};
		`}

		${media.xl`
			margin-right: ${sp[8]};
			margin-left: ${sp[8]};
		`}

		${above(contain['offset'])`
			margin-right: auto;
			margin-left: auto;
		`}
	`,
}

// Font Sizes
export const base = css`
	font-size: ${font.base};
`

export const h1 = css`
	font-size: ${rem('32px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('48px')};
	`}

	${media.lg`
		font-size: ${rem('52px')};
	`}
`

export const h2 = css`
	font-size: ${rem('28px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('40px')};
	`}

	${media.lg`
		font-size: ${rem('41px')};
	`}
`

export const h3 = css`
	font-size: ${rem('25px')};
	line-height: 1.15;
	font-weight: 600;

	${media.lg`
		font-size: ${rem('32px')};
	`}
`

export const h4 = css`
	font-size: ${rem('22px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('25px')};
	`}
`

export const h5 = css`
	font-size: ${rem('18px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('20px')};
		line-height: 1.4;
	`}
`

export const body = {
	base: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	large: css`
		font-size: ${rem('25px')};
		line-height: 1.5;
		font-weight: 400;

		${media.lg`
			font-size: ${rem('28px')};
		`}
	`,
	bold: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 600;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	small: css`
		font-size: ${rem('14px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('16px')};
		`}
	`,
	'small-bold': css`
		font-size: ${rem('14px')};
		line-height: ${rem('24px')};
		font-weight: 600;

		${media.md`
			font-size: ${rem('16px')};
			line-height: 1.5r;
		`}
	`,
}

// Breadcrumbs, buttons, icon labels, and tabs
export const callToAction = css`
	font-size: ${rem('15px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('16px')};
	`}
`

export const label = css`
	font-size: ${rem('14px')};
	line-height: 1.2;
	font-weight: 400;
`

export const tag = {
	base: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 400;
	`,
	important: css`
	import { Colors } from './utilities.d';
	font-size: ${rem('12px')};
		line-height: 1.2;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	`,
	bold: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 600;
	`,
}

export const button = {
	sm: css``,
	md: css``,
	lg: css``,
	hero: css`
		font-size: ${rem(sp[2])};
		padding: ${rem(sp[1.5])};

		${media.md`
			font-size: ${rem('48px')};
		`}

		${media.lg`
			font-size: ${rem('48px')};
		`}

		${media.xl`
			font-size: ${rem('48px')};
		`}

		${media.xxl`
			font-size: ${rem('48px')};
		`}
	`,
}
