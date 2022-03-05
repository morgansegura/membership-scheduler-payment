import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Styles]
import { ThemeProvider } from 'styled-components'
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

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
            <GlobalStyle />
            {children}
            <button onClick={themeToggler}>{theme === 'light' ? 'Light' : 'Dark'} Theme</button>
        </ThemeProvider>
    )
}

export default ThemesProvider
