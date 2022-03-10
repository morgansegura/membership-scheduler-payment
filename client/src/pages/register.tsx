import React from 'react'

// [Auth]
import { RegisterForm } from 'auth'
// [Comonents]
import { Base as Layout, HeadContent } from 'components/layouts'
// [Utils]
import { siteMetadata } from 'utils'

type Props = {}

const RegisterPage: React.FC<Props> = () => {
  return (
    <>
      <HeadContent
        title="Registration Page"
        description="This is the Registration Page"
        canonicalUrl={`${siteMetadata.siteUrl}/register`}
      />
      <Layout>
        <RegisterForm />
      </Layout>
    </>
  )
}

export default RegisterPage
