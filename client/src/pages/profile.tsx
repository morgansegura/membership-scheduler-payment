import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
// [Api]
import { userService } from 'api'
// [Auth]
import { UpdateUserForm } from 'auth'
// [Hooks]
import { useStorage } from 'hooks'
// [Comonents]
import { Base as Layout, HeadContent } from 'components/layouts'
// [Utils]
import { siteMetadata } from 'utils'

type UserDetailsProps = {
  data: any | null
}
const UserDetails: React.FC<UserDetailsProps> = ({ data }) => {
  return data ? <UpdateUserForm data={data} /> : null
}

type AccountPageProps = {}
const AccountPage: React.FC<AccountPageProps> = () => {
  const router = useRouter()
  const { getStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('jwt')))
  const [userInfo, setUserInfo] = React.useState([])

  React.useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  React.useEffect(() => {
    const fetchData = async () => {
      userService.me().then(res => {
        setUserInfo(res)
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <HeadContent
        title="Account Page"
        description="This is your Account Page"
        canonicalUrl={`${siteMetadata.siteUrl}/`}
      />
      <Layout>
        <UserDetails data={userInfo} />
      </Layout>
    </>
  )
}

export default AccountPage
