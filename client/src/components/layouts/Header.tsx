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
import StadiumIcon from '@mui/icons-material/Stadium'

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

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 100,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          position: 'fixed',
          px: 1,
          pt: 1,
          width: '100%',
        }}
      >
        <AppBar
          color="inherit"
          sx={{
            background: 'rgba(255,255,255,0.90)',
            backdropFilter: 'blur(3px)',
            boxShadow: trigger ? 5 : 0,
            overflow: 'hidden',
            borderRadius: 3,
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
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              <IconButton
                onClick={() => console.log('logo clicked')}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <StadiumIcon />
              </IconButton>
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
