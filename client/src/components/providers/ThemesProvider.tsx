import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Mui]
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, IconButton, Link, ListItemIcon, MenuItem, useMediaQuery } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

interface ToggleColorModeProps {}
export function ToggleColorMode(props?: ToggleColorModeProps) {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <>
      <MenuItem onClick={colorMode.toggleColorMode}>
        <ListItemIcon>
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon fontSize="small" />
          ) : (
            <Brightness4Icon fontSize="small" />
          )}
        </ListItemIcon>
        {theme.palette.mode === 'dark' ? 'Light' : 'Dark'} Mode
      </MenuItem>
    </>
  )
}

interface ThemesProviderProps {
  children?: React.ReactChild[] | React.ReactChild
}
const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {
  const { getStorage, setStorage } = useStorage()
  const [mode, setMode] = React.useState<any>(getStorage('theme') || 'light')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
        mode === 'dark' ? setStorage('theme', 'light') : setStorage('theme', 'dark')
      },
    }),
    [],
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#e5e7eb',
                },
                primary: {
                  main: '#06b6d4',
                },
                secondary: {
                  main: '#f43f5e',
                },
                error: {
                  main: '#dc2626',
                },
                success: {
                  main: '#059669',
                },
                info: {
                  main: '#22d3ee',
                },
                components: {
                  AppBar: {
                    default: 'yellow',
                  },
                },
              }
            : {
                primary: {
                  main: '#06b6d4',
                },
                secondary: {
                  main: '#f43f5e',
                },
                error: {
                  main: '#dc2626',
                },
                success: {
                  main: '#059669',
                },
                info: {
                  main: '#22d3ee',
                },
                components: {
                  AppBar: {
                    main: 'red',
                  },
                },
              }),
        },
        typography: {
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
          fontFamily: 'Source Sans Pro',
          fontSize: 16,
          subtitle1: {
            fontFamily: 'Source Sans Pro',
          },
          button: {
            fontFamily: 'Merriweather Sans',
            lineHeight: 1.34,
          },
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
        <ToggleColorMode />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemesProvider
