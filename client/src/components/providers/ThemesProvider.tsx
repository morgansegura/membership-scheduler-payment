import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components'
// [Styles]
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from 'styles/config/globalStyles'
import { themeLight, themeDark } from 'styles/theme/default'

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
  const [theme, setTheme] = React.useState(startTheme)

  const themeToggler = () => {
    if (theme === 'light') {
      setStorage('theme', 'dark')
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  React.useEffect(() => {}, [theme])

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ThemesProvider
