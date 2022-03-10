import React from 'react'
// [Comonents]
import { Base, HeadContent } from 'components'
// [Utils]
import { siteMetadata } from 'utils'

type Props = {
  user: any
}

const Home: React.FC<Props> = ({ user }) => {
  console.log(user)
  return (
    <>
      <HeadContent
        title="Home Page"
        description="This is the Home Page"
        canonicalUrl={`${siteMetadata.siteUrl}/`}
      />
      <Base>
        <p>The Base layout is on the home page</p>
      </Base>
    </>
  )
}

export default Home
