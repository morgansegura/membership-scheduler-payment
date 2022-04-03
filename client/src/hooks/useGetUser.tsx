import React from 'react'
import { useStorage } from 'hooks'
import { userService } from 'api'

interface useGetUserProps {}

function useGetUser(props?: useGetUserProps) {
  const { getStorage, setStorage } = useStorage()
  const [checkUser, setCheckUser] = React.useState(getStorage('user'))
  const userDisplay = checkUser ? checkUser : `There is currently no user logged in.`

  React.useEffect(() => {
    if (!checkUser) {
      userService.me().then((res: any) => {
        console.log(res)
      })
    }
  }, [checkUser])

  return <>{userDisplay}</>
}

export default useGetUser
