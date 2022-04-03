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
import { Ball, Goal } from 'components'

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

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 300,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          position: 'fixed',
          px: 2,
          pt: 2,
          width: '100%',
        }}
      >
        <AppBar
          color="inherit"
          sx={{
            backgroundColor:
              theme.palette.mode === 'light'
                ? pos > 30
                  ? 'rgba(255,255,255,.80)'
                  : `rgba(${theme.palette.common.white}, 1)`
                : pos > 30
                ? 'rgba(24, 24, 27, 0.70)'
                : 'rgba(24, 24, 27, 1)',
            backdropFilter: 'blur(5px)',
            boxShadow: pos > 20 ? theme.shadows[24] : 'none',
            overflow: 'hidden',
            width: '100%',
            maxWidth: 2256,
            position: 'relative',
          }}
        >
          {children}
        </AppBar>
      </Box>
    </Slide>
  )
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  return (
    <>
      <HideOnScroll {...props}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width={'100%'}
          >
            <Link
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
          </Stack>
        </Toolbar>
      </HideOnScroll>
    </>
  )
}

export default Header
