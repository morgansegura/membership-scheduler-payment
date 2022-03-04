import React from 'react'
import Link from 'next/link'
// [Components]
import { Navigation } from 'components/layouts'
// [Styles]
import { Container } from 'styles/Container'
import { Header as HeaderWrapper, Logo, Menu, Nav } from 'styles/Header'

type Props = {}

const Header: React.FC<Props> = () => {
    return (
        <Container>
            <HeaderWrapper>
                <Menu>
                    <Link href="/">
                        <a>
                            <Logo>Test Site</Logo>
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
