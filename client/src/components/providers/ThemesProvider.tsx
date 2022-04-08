import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components/core'
// [Styles]
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from 'styles/config/globalStyles'
import { themeLight, themeDark } from 'styles/Theme'

type Props = {
	children?: React.ReactChild[] | React.ReactChild
}

type ThemeType = { theme: any }

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${GlobalStyle}
`

const ThemesProvider: React.FC<Props> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()
	const startTheme = getStorage('theme') || 'light'
	const [themeMode, setThemeMode] = React.useState(startTheme)

	const themeToggler = () => {
		if (themeMode === 'light') {
			setStorage('theme', 'dark')
			setThemeMode('dark')
		} else {
			setStorage('theme', 'light')
			setThemeMode('light')
		}
	}

	return (
		<ThemeProvider theme={themeMode === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<Button color="primary" onClick={themeToggler}>
				Change Theme
			</Button>
			{children}
		</ThemeProvider>
	)
}

export default ThemesProvider
