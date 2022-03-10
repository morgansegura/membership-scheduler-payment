import React from 'react'
import Link from 'next/link'
import { useClickAway, useKey } from 'react-use'
import { useRouter } from 'next/router'
// [Api]
import { authService, userService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Utils]
import { userInitials } from 'utils/misc'
// [Components]
import { OpenMenu } from 'components'
// [Styles]
import { Avatar, Menu, MenuSelector, Tab, NavItem } from 'styles/ProfileMenu'

type Props = {}

interface IUserData {
  firstName?: string
  lastName?: string
}

const ProfileMenu: React.FC<Props> = () => {
  const { getStorage, removeStorage } = useStorage()
  const router = useRouter()
  const [response, setResponse] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [user, setUser] = React.useState(Boolean(getStorage('jwt')))
  const [userInitial, setUserInitial] = React.useState<IUserData | undefined>(undefined)
  const [showMenu, setShowMenu] = React.useState(false)
  const [focus, setFocus] = React.useState(false)

  const profileMenuRef = React.useRef(null)

  const isActive = (route: string) => {
    return router.pathname === route
  }

  const signout = () => {
    authService.signout(null).then(res => {
      const { message } = res
      setResponse(message)
    })
    removeStorage('jwt')
    setUser(false)
    router.push('/login')
  }

  useClickAway(profileMenuRef, () => {
    setShowMenu(false)
    setFocus(false)
  })

  const toggleMenu = (e: any) => {
    setShowMenu(!showMenu)
    setFocus(!focus)
  }

  const keyPressToggleMenu = () => {
    setFocus(false)
    setShowMenu(false)
  }

  const getUser = () => {
    userService.me().then((res: any) => {
      const { firstName, lastName } = res
      res.initials = userInitials(`${firstName}`)
      setUserInitial(res.initials)
      setUserName(`${firstName} ${lastName}`)
    })
  }

  React.useEffect(() => {
    getUser()
    const close = (e: any) => {
      if (e.keyCode === 27) {
        keyPressToggleMenu()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div ref={profileMenuRef}>
      <MenuSelector onClick={toggleMenu}>
        <OpenMenu />
        <Avatar focus={focus}>{userInitial}</Avatar>
      </MenuSelector>
      <Menu isVisible={showMenu}>
        <Tab>{userName}</Tab>
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
      </Menu>
    </div>
  )
}

export default ProfileMenu
