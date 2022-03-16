import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import NProgress from 'nprogress'
// [Components]
import { Navigation } from 'components/layouts'
// [Data]
import { siteMetadata } from 'utils'
// [Styles]
import { Container } from 'styles/Container'
import { Header as HeaderWrapper, Logo, Menu, Nav } from 'styles/Header'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Menu>
          <Link href="/">
            <a>
              <Logo>{siteMetadata.companyName}</Logo>
            </a>
          </Link>
          <Nav>
            <Navigation />
          </Nav>
        </Menu>
      </HeaderWrapper>
    </Container>
  )
}

export default Header
