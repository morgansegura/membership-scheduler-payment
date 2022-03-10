import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components'
// [Styles]
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from 'styles/config/globalStyles'
import { themeLight, themeDark } from 'styles/Theme'

type Props = {
  children?: React.ReactChild[] | React.ReactChild
}

const ThemesProvider: React.FC<Props> = ({ children }) => {
  const { getStorage, setStorage } = useStorage()
  const startTheme = getStorage('theme') || 'light'
  const [theme, setTheme] = React.useState(startTheme)

  const themeToggler = () => {
    if (theme === 'light') {
      setStorage('theme', 'dark')
      setTheme('dark')
    } else {
      setStorage('theme', 'light')
      setTheme('light')
    }
  }

  React.useEffect(() => {}, [theme])

  type ThemeType = { theme: any }

  const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
        ${GlobalStyle}
    `

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyles />
      {children}
      {/* <Button onClick={themeToggler} themed="primary" size="sm">
        {theme === 'light' ? 'Light' : 'Dark'} Theme
      </Button> */}
    </ThemeProvider>
  )
}

export default ThemesProvider
