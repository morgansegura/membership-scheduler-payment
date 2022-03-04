import styled from 'styled-components'
import * as include from 'styles/config/utilities'
import { rgba } from 'polished'

interface NavItemProps {
    active?: boolean
}

export const Footer = styled.div`
    background-color: ${include.colors.slate300};
    margin-top: ${include.sp['3']};
    margin-bottom: ${include.sp['2.5']};
    ${include.radius['md']};
    padding: ${include.sp['4']} ${include.sp['4']};

    ${include.media['lg']`
		padding-right: ${include.sp['4']};
		padding-left: ${include.sp['4']};
	`}

    ${include.media['xl']`
		padding-right: ${include.sp['6']};
		padding-left: ${include.sp['6']};
	`}

	${include.media['xxl']`
		padding-right: ${include.sp['8']};
		padding-left: ${include.sp['8']};
	`}

	a {
        text-decoration: none;
    }
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.div`
    ${include.fontSizing('13px', '21px', 500)}
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${include.colors.slate800};
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-self: flex-end;
    grid-gap: ${include.sp['3']};
`

export const NavItem = styled.span`
    ${include.fontSizing('13px', '21px', 500)}
    text-transform: uppercase;
    color: ${include.colors.slate700};
    padding: ${include.sp[1]} ${include.sp[2]};
    ${include.radius.circle}
    transition: all 0.3s ease-out;

    &:hover {
        color: ${include.colors.slate900};
        background-color: ${include.colors.slate50};
    }

    ${(props: NavItemProps) =>
        props?.active &&
        `
        color: ${include.colors.blue600};
    `};
`

export const FooterCopyright = styled.div`
    ${include.fontSizing('13px', '21px')}
    color: ${include.colors.slate800}
`
