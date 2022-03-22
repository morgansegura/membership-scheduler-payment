import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { ProfileMenu, RoleGuardLayout, paths } from 'components'
// [Styles]
import { ProfileNavItem } from 'styles/ProfileMenu'
import { alertService, authService } from 'api'

type NavLinksProps = {}

const NavLinks: React.FC<NavLinksProps> = () => {
  const router = useRouter()
  const { getStorage, setStorage, removeStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('accessToken')))
  const [theme, setTheme] = React.useState(getStorage('theme') || 'light')

  const { auth, account, base } = paths

  const isActive = (route: string) => {
    return router.pathname === route
  }

  const signout = () => {
    removeStorage('accessToken')
    alertService.success(`👍🏽  &nbsp Catch you later!`, {
      keepAfterRouteChange: true,
    })
    router.push(`${auth.signin.path}`)
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
        <RoleGuardLayout level="GUEST">
          <>
            {!isActive(`${base.landing.path}`) && (
              <Link href={base.landing.path}>
                <a>
                  <ProfileNavItem>{base.landing.label}</ProfileNavItem>
                </a>
              </Link>
            )}
            {!isActive(`${auth.signin.path}`) && (
              <Link href={`${auth.signin.path}`}>
                <a>
                  <ProfileNavItem>{auth.signin.label}</ProfileNavItem>
                </a>
              </Link>
            )}

            {!isActive(`${auth.register.path}`) && (
              <Link href={auth.register.path}>
                <a>
                  <ProfileNavItem>{auth.register.label}</ProfileNavItem>
                </a>
              </Link>
            )}
          </>
        </RoleGuardLayout>
        <RoleGuardLayout level="MEMBER">
          <Link href={account.dashboard.path}>
            <a>
              <ProfileNavItem>{account.dashboard.label}</ProfileNavItem>
            </a>
          </Link>
          <Link href={account.profile.path}>
            <a>
              <ProfileNavItem>{account.profile.label}</ProfileNavItem>
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
