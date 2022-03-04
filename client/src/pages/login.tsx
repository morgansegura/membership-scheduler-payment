import React from 'react'
import Head from 'next/head'
// [Auth]
import { LoginForm } from 'auth'
// [Comonents]
import { Base } from 'components/layouts'

type Props = {}

const LoginPage: React.FC<Props> = () => {
    return (
        <>
            <Head>
                <title>Happy All The Time</title>
            </Head>
            <Base>
                <LoginForm />
            </Base>
        </>
    )
}

export default LoginPage
