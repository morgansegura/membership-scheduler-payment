import React from 'react'

// [Auth]
import { LoginForm } from 'auth'
// [Comonents]
import { Base, HeadContent } from 'components/layouts'
// [Utils]
import { siteMetadata } from 'utils'

type Props = {}

const LoginPage: React.FC<Props> = () => {
  return (
    <>
      <HeadContent
        title="Login Page"
        description="This is the Login Page"
        canonicalUrl={`${siteMetadata.siteUrl}/login`}
      />
      <Base>
        <LoginForm />
      </Base>
    </>
  )
}

export default LoginPage
