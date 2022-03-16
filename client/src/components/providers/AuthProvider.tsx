import React from 'react'

// [Hooks]
import { useStorage } from 'hooks'
import { userService } from 'api'

type Props = {}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { setStorage } = useStorage()

  const getUser = () => {
    // if (user) {
    //   userService.me().then(() => {
    //   })
    // }
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return <>{children}</>
}

export default AuthProvider
