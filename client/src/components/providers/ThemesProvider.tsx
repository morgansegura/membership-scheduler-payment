import React from 'react'
// [Mui]
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, IconButton, PaletteMode } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

type Props = {
  children?: React.ReactChild[] | React.ReactChild
}
// export const themeOptions: ThemeOptions = {
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#06b6d4',
//     },
//     secondary: {
//       main: '#f43f5e',
//     },
//     error: {
//       main: '#dc2626',
//     },
//     success: {
//       main: '#059669',
//     },
//     info: {
//       main: '#22d3ee',
//     },
//   },
//   typography: {
//     h1: {
//       fontFamily: 'Merriweather Sans',
//     },
//     h2: {
//       fontFamily: 'Merriweather Sans',
//     },
//     h3: {
//       fontFamily: 'Merriweather Sans',
//     },
//     h4: {
//       fontFamily: 'Source Sans Pro',
//     },
//     h5: {
//       fontFamily: 'Merriweather Sans',
//     },
//     h6: {
//       fontFamily: 'Merriweather Sans',
//     },
//     fontFamily: 'Source Sans Pro',
//     subtitle1: {
//       fontFamily: 'Source Sans Pro',
//     },
//     button: {
//       fontFamily: 'Merriweather Sans',
//       lineHeight: 1.34,
//     },
//   },
//   overrides: {
//     MuiAppBar: {
//       colorInherit: {
//         backgroundColor: '#f43f5e',
//         color: '#fff',
//       },
//     },
//     MuiButton: {
//       root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//       },
//     },
//     MuiSwitch: {
//       root: {
//         width: 42,
//         height: 26,
//         padding: 0,
//         margin: 8,
//       },
//       switchBase: {
//         padding: 1,
//         '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
//           transform: 'translateX(16px)',
//           color: '#fff',
//           '& + $track': {
//             opacity: 1,
//             border: 'none',
//           },
//         },
//       },
//       thumb: {
//         width: 24,
//         height: 24,
//       },
//       track: {
//         borderRadius: 13,
//         border: '1px solid #bdbdbd',
//         backgroundColor: '#fafafa',
//         opacity: 1,
//         transition:
//           'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//       },
//     },
//   },
//   props: {
//     MuiAppBar: {
//       color: 'inherit',
//     },
//     MuiButton: {
//       size: 'small',
//     },
//     MuiButtonGroup: {
//       size: 'small',
//     },
//     MuiCheckbox: {
//       size: 'small',
//     },
//     MuiFab: {
//       size: 'small',
//     },
//     MuiFormControl: {
//       margin: 'dense',
//       size: 'small',
//     },
//     MuiFormHelperText: {
//       margin: 'dense',
//     },
//     MuiIconButton: {
//       size: 'small',
//     },
//     MuiInputBase: {
//       margin: 'dense',
//     },
//     MuiInputLabel: {
//       margin: 'dense',
//     },
//     MuiRadio: {
//       size: 'small',
//     },
//     MuiSwitch: {
//       size: 'small',
//     },
//     MuiTextField: {
//       margin: 'dense',
//       size: 'small',
//     },
//     MuiTooltip: {
//       arrow: true,
//     },
//     MuiList: {
//       dense: true,
//     },
//     MuiMenuItem: {
//       dense: true,
//     },
//     MuiTable: {
//       size: 'small',
//     },
//     MuiButtonBase: {
//       disableRipple: true,
//     },
//   },
//   shape: {
//     borderRadius: 4,
//   },
//   spacing: 8,
// }

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
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
    subtitle1: {
      fontFamily: 'Source Sans Pro',
    },
    button: {
      fontFamily: 'Merriweather Sans',
      lineHeight: 1.34,
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#f43f5e',
        color: '#fff',
      },
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
})

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ToggleColorMode() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

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
