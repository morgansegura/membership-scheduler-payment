import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Api]
import { authService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Styles]
import { NavItem } from 'styles/Header'

type NavLinksProps = {}

const NavLinks: React.FC<NavLinksProps> = () => {
    const router = useRouter()
    const { getStorage, removeStorage } = useStorage()
    const [response, setResponse] = React.useState('')
    const [user, setUser] = React.useState(Boolean(getStorage('jwt')))
    const [role, setRole] = React.useState(4)

    const signout = () => {
        authService.signout(null).then(res => {
            const { message } = res
            setResponse(message)
        })
        removeStorage('jwt')
        setUser(false)
        router.push('/login')
    }

    const isActive = (route: string) => {
        return router.pathname === route
    }

    const superLinks = () => {
        return (
            role === 0 && (
                <>
                    <Link href="/">
                        <a>
                            <NavItem active={isActive('/')}>Super</NavItem>
                        </a>
                    </Link>
                </>
            )
        )
    }

    const adminLinks = () => {
        return (
            role <= 1 && (
                <>
                    <Link href="/">
                        <a>
                            <NavItem active={isActive('/')}>Admin</NavItem>
                        </a>
                    </Link>
                </>
            )
        )
    }

    const modLinks = () => {
        return (
            role <= 2 && (
                <>
                    <Link href="/">
                        <a>
                            <NavItem active={isActive('/')}>Moderator</NavItem>
                        </a>
                    </Link>
                </>
            )
        )
    }

    const memberLinks = () => {
        return (
            role <= 3 && (
                <>
                    <Link href="/">
                        <a>
                            <NavItem active={isActive('/')}>Member</NavItem>
                        </a>
                    </Link>
                </>
            )
        )
    }

    const authLinks = () => {
        return !user ? (
            <>
                {!isActive('/login') && (
                    <Link href="/login">
                        <a>
                            <NavItem>Login</NavItem>
                        </a>
                    </Link>
                )}
                {!isActive('/register') && (
                    <Link href="/register">
                        <a>
                            <NavItem>Register</NavItem>
                        </a>
                    </Link>
                )}
            </>
        ) : (
            <>
                <Link href="/account">
                    <a>
                        <NavItem active={isActive('/account')}>Account</NavItem>
                    </a>
                </Link>
                <Link href="/logout">
                    <a onClick={signout}>
                        <NavItem>Logout</NavItem>
                    </a>
                </Link>
            </>
        )
    }

    const baseLinks = () => {
        return (
            <>
                <Link href="/">
                    <a>
                        <NavItem active={isActive('/')}>BaseLink1</NavItem>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <NavItem active={isActive('/')}>BaseLink2</NavItem>
                    </a>
                </Link>
            </>
        )
    }

    return (
        <>
            {baseLinks()}
            {memberLinks()}
            {modLinks()}
            {adminLinks()}
            {superLinks()}
            {authLinks()}
        </>
    )
}

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
    return <NavLinks />
}

export default Navigation
