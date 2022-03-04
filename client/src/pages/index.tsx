import React from 'react'
import Head from 'next/head'

// [Comonents]
import { Base } from 'components/layouts'

type Props = {
    user: any
}

const Home: React.FC<Props> = ({ user }) => {
    console.log(user)
    return (
        <>
            <Head>
                <title>Happy All The Time</title>
            </Head>
            <Base>
                <p>The Base layout is on the home page</p>
            </Base>
        </>
    )
}

export default Home
