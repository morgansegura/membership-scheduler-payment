import React from 'react'
import { authService } from 'api'
import { useStorage } from 'hooks'

type RoleGuardProps = {
  role: string
  level: string
}

const RoleGuard: React.FC<RoleGuardProps> = ({ children, role, level }) => {
  const roleSetter = () => {
    let allowedTypes: string[]

    switch (role) {
      case 'member':
        allowedTypes = ['member']
        break
      case 'mod':
        allowedTypes = ['member', 'mod']
        break
      case 'admin':
        allowedTypes = ['member', 'mod', 'admin']
        break
      default:
        allowedTypes = ['guest']
        break
    }

    return { allowedTypes }
  }
  const { allowedTypes } = roleSetter()

  return <>{level && allowedTypes.includes(level) && <>{children}</>}</>
}

type RoleGuardLayoutProps = {
  children?: React.ReactChild | React.ReactChild[]
  level: string
}
const RoleGuardLayout: React.FC<RoleGuardLayoutProps> = ({ children, level }) => {
  const { getStorage, setStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [userRole, setUserRole] = React.useState('guest')

  const getUser = () => {
    if (user) {
      authService.authUser().then((res: any) => {
        const { role } = res
        setUserRole(role[0]?.toLowerCase())
      })
    }
  }

  React.useEffect(() => {
    getUser()
  }, [user])

  return (
    <>
      <RoleGuard role={userRole} level={level}>
        {children}
      </RoleGuard>
    </>
  )
}

export default RoleGuardLayout
