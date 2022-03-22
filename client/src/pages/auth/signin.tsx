import React from 'react'

// [Auth]
import { SigninForm } from 'auth'
// [Comonents]
import { Base, HeadContent } from 'components/layouts'
// [Utils]
import { siteMetadata } from 'utils'

type Props = {}

const SigninPage: React.FC<Props> = () => {
  return (
    <>
      <HeadContent
        title="Signin Page"
        description="This is the Signin Page"
        canonicalUrl={`${siteMetadata.siteUrl}/auth/signin`}
      />
      <Base>
        <SigninForm />
      </Base>
    </>
  )
}

export default SigninPage
