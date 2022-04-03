import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Mui]
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ListItemIcon, MenuItem } from '@mui/material'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined'

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
            <Brightness7OutlinedIcon fontSize="small" />
          ) : (
            <Brightness4OutlinedIcon fontSize="small" />
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
  const theme = useTheme()
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

  theme.shadows.push(
    '0px 1.4px 0.6px -45px rgba(24, 24, 27, 0.031), 0px 3.2px 1.5px -45px rgba(24, 24, 27, 0.045), 0px 5.8px 2.7px -45px rgba(24, 24, 27, 0.055), 0px 9.6px 4.5px -45px rgba(24, 24, 27, 0.065), 0px 15.9px 7.4px -45px rgba(24, 24, 27, 0.075), 0px 27.7px 12.9px -45px rgba(24, 24, 27, 0.089), 0px 60px 28px -45px rgba(24, 24, 27, 0.12)',
  )

  const customTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  paper: '#fff',
                  default: '#e4e4e7',
                },
                text: {
                  primary: '#18181b',
                  secondary: '#52525b',
                },
                primary: {
                  main: '#f43f5e',
                },
                secondary: {
                  main: '#71717a',
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
                  A100: '#cfd8dc',
                  A200: '#b0bec5',
                  A400: '#78909c',
                  A700: '#455a64',
                },
              }
            : {
                background: {
                  paper: '#27272a',
                  default: '#18181b',
                },
                text: {
                  primary: '#fafafa',
                  secondary: '#d4d4d8',
                },
                primary: {
                  main: '#14b8a6',
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
        shadows: [...theme.shadows],
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: theme.shadows[25],
                padding: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: theme.shadows[25],
                padding: 16,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 6,
              },
            },
          },
          MuiCardMedia: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: 'inherit',
              },
            },
          },
        },
      }),
    [mode],
  )
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemesProvider
