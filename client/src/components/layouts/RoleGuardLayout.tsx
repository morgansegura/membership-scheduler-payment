import React from 'react'
import { userService } from 'api'

type RoleGuardProps = {
  role: string
  level: string
}

const RoleGuard: React.FC<RoleGuardProps> = ({ children, role, level }) => {
  const roleSetter = () => {
    let roleType: string = level
    let allowedTypes: string[]
    let message: any

    console.log()

    switch (role) {
      case 'member':
        allowedTypes = ['guest', 'member']
        break
      case 'mod':
        allowedTypes = ['guest', 'member', 'mod']
        break
      case 'admin':
        allowedTypes = ['guest', 'member', 'mod', 'admin']
        break
      default:
        allowedTypes = ['guest']
        break
    }

    message = (
      <div>
        <p>You have {roleType} level permissions.</p>
      </div>
    )
    return { message, allowedTypes }
  }

  const { message, allowedTypes } = roleSetter()

  return (
    <>
      {role && allowedTypes.includes(level) && (
        <div>
          {children}
          {message}
        </div>
      )}
    </>
  )
}

type RoleGuardLayoutProps = {
  children?: React.ReactChild | React.ReactChild[]
  level: string
}
const RoleGuardLayout: React.FC<RoleGuardLayoutProps> = ({ children, level }) => {
  const [role, setRole] = React.useState('guest')

  const getUser = () => {
    userService.me().then((res: any) => {
      const { role } = res
      setRole(role)
    })
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <RoleGuard role={role} level={level}>
        {children}
      </RoleGuard>
    </>
  )
}

export default RoleGuardLayout
