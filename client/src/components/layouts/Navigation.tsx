import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { ProfileMenu, RoleGuardLayout } from 'components'
// [Styles]
import { ProfileNavItem } from 'styles/ProfileMenu'
import { alertService, authService } from 'api'

type NavLinksProps = {}

const NavLinks: React.FC<NavLinksProps> = () => {
  const router = useRouter()
  const { getStorage, setStorage, removeStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [theme, setTheme] = React.useState(getStorage('theme') || 'light')

  const isActive = (route: string) => {
    return router.pathname === route
  }

  const signout = () => {
    authService
      .signout()
      .then(() => {
        removeStorage('user')
        alertService.success(`👍🏽  &nbsp Catch you later!`, {
          keepAfterRouteChange: true,
        })
      })
      .catch(err => console.log(err))
      .finally(() => router.push('/login'))
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setStorage('theme', 'dark')
    } else {
      setTheme('light')
      setStorage('theme', 'light')
    }
    router.reload()
  }

  return (
    <>
      <ProfileMenu>
        <RoleGuardLayout level="guest">
          <>
            {!isActive('/') && (
              <Link href="/">
                <a>
                  <ProfileNavItem>Home</ProfileNavItem>
                </a>
              </Link>
            )}
            {!isActive('/login') && (
              <Link href="/login">
                <a>
                  <ProfileNavItem>Login</ProfileNavItem>
                </a>
              </Link>
            )}

            {!isActive('/register') && (
              <Link href="/register">
                <a>
                  <ProfileNavItem>Register</ProfileNavItem>
                </a>
              </Link>
            )}
          </>
        </RoleGuardLayout>
        <RoleGuardLayout level="member">
          <Link href="/dashboard">
            <a>
              <ProfileNavItem>Dashboard</ProfileNavItem>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <ProfileNavItem>Profile</ProfileNavItem>
            </a>
          </Link>
        </RoleGuardLayout>
        <ProfileNavItem onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </ProfileNavItem>
        {user ? <ProfileNavItem onClick={signout}>Logout</ProfileNavItem> : ``}
      </ProfileMenu>
    </>
  )
}

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
  return <NavLinks />
}

export default Navigation
