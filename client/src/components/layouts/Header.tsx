import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import NProgress from 'nprogress'
// [Components]
import { Navigation } from 'components/layouts'
import { AppBar } from 'components/core'
// [Data]
import { siteMetadata } from 'utils'
// [Styles]
import { Container } from 'styles/Container'
import { Slide } from 'styles/core/utils/Slide'
import { Logo, Menu, Nav } from 'styles/Header'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

interface Props {
	window?: () => Window
	children: React.ReactElement
}

function HideOnScroll(props: Props) {
	const { children, window } = props

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

function HideAppBar(props: Props) {}

const Header: React.FC<Props> = () => {
	return (
		<Container>
			<AppBar>
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
			</AppBar>
		</Container>
	)
}

export default Header
