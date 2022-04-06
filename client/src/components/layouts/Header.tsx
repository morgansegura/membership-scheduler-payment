import React from 'react'
import { Router } from 'next/router'
import NProgress from 'nprogress'
// [Data]
import { siteMetadata } from 'utils'
// [Components]
import { ProfileMenu } from 'components'
// [Hooks]
import { useScrollPosition } from 'hooks'
// [Mui]
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Slide,
  Stack,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { StyledAppBar, StyledHeader } from 'styles/Header'
import { Ball } from 'components'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

interface HideOnScrollProps {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props
  const pos = useScrollPosition()
  const theme = useTheme()
  const [color, setColor] = React.useState('')

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 300,
  })

  React.useEffect(() => {
    const dynamicColor = () => {
      if (theme.palette.mode === 'light') {
        if (pos > 30) {
          setColor('rgba(255,255,255,.80)')
        } else {
          setColor('rgba(255, 255, 255, 1)')
        }
      } else {
        if (pos > 30) {
          setColor('rgba(39, 39, 42, 0.95)')
        } else {
          setColor('rgba(39, 39, 42, 1)')
        }
      }
      console.log(theme.palette.mode)
    }
    dynamicColor()
  }, [pos, theme.palette.mode, color])

  return (
    <StyledAppBar theme={theme}>
      <Slide appear={false} direction="down" in={!trigger}>
        <div className="AppBarContainer-root">
          <div
            className="AppBar-root"
            style={{
              backgroundColor: color,
              boxShadow: pos > 20 ? theme.shadows[24] : 'none',
            }}
          >
            {children}
          </div>
        </div>
      </Slide>
    </StyledAppBar>
  )
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  const theme = useTheme()
  return (
    <StyledHeader theme={theme}>
      <HideOnScroll {...props}>
        <div className="HeaderContainer-root">
          <Link
            className="HeaderLogo-root"
            href="/"
            underline="none"
            color="inherit"
            fontSize="medium"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            <Ball />
            {siteMetadata.companyName}
          </Link>
          <ProfileMenu />
        </div>
      </HideOnScroll>
    </StyledHeader>
  )
}

export default Header
