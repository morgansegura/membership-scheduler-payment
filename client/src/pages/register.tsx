import React from 'react'
import Head from 'next/head'
// [Auth]
import { RegisterForm } from 'auth'
// [Comonents]
import { Base as Layout } from 'components/layouts'

type Props = {}

const RegisterPage: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Happy All The Time</title>
      </Head>
      <Layout>
        <RegisterForm />
      </Layout>
    </>
  )
}

export default RegisterPage
