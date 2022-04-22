import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components/core'
// [Styles]
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from 'styles/config/globalStyles'
import { themeLight, themeDark } from 'styles/theme/default'
import { StyledMenuIcon, StyledMenuItem } from 'styles/core/navigation/Menu'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

type ThemesProviderProps = {
	children?: React.ReactChild[] | React.ReactChild
}

type ThemeType = { theme: any }

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${GlobalStyle}
`

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

interface ToggleColorModeProps {}
export function ToggleColorMode(props?: ToggleColorModeProps) {
	const { getStorage } = useStorage()
	const colorMode = React.useContext(ColorModeContext)
	const [themeMode, setThemeMode] = React.useState(getStorage('theme') || 'light')

	const toggleMode = () => {
		if (themeMode === 'dark') {
			setThemeMode('light')
		} else {
			setThemeMode('dark')
		}
	}

	return (
		<StyledMenuItem
			onClick={() => {
				colorMode.toggleColorMode()
				toggleMode()
			}}
		>
			<StyledMenuIcon>
				{themeMode === 'dark' ? (
					<MdBrightness7 fontSize="small" />
				) : (
					<MdBrightness4 fontSize="small" />
				)}
			</StyledMenuIcon>
			{themeMode === 'dark' ? 'Light' : 'Dark'} Mode
		</StyledMenuItem>
	)
}

const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()
	const [themeMode, setThemeMode] = React.useState(getStorage('theme') || 'light')

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setThemeMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
				themeMode === 'dark' ? setStorage('theme', 'light') : setStorage('theme', 'dark')
			},
		}),
		[],
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			{console.log(themeLight)}
			<ThemeProvider theme={themeMode === 'light' ? themeLight : themeDark}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default ThemesProvider
