import React from 'react'
import { useRouter } from 'next/router'

// [Hooks]
import { useStorage } from 'hooks'

type Props = {}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const { getStorage } = useStorage()
    const [user, setUser] = React.useState(Boolean(getStorage('jwt')))
    const [userInfo, setUserInfo] = React.useState({})

    React.useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [])

    return <>{children}</>
}

export default AuthProvider
