import React from 'react'
// [Comonents]
import { Base, HeadContent, RoleGuardLayout } from 'components'
// [Utils]
import { siteMetadata } from 'utils'
import { Box } from 'components/core'

type Props = {
  user: any
}

const Home: React.FC<Props> = () => {
  return (
    <>
      <HeadContent
        title="Home Page"
        description="This is the Home Page"
        canonicalUrl={`${siteMetadata.siteUrl}/`}
      />
      <Base>
        <p>The Base layout is on the home page</p>
        <RoleGuardLayout level="guest">
          <h1>Guest level html</h1>
        </RoleGuardLayout>
        <RoleGuardLayout level="member">
          <h1>Member level html</h1>
        </RoleGuardLayout>
        <RoleGuardLayout level="mod">
          <h1>Moderator level html</h1>
        </RoleGuardLayout>
        <RoleGuardLayout level="admin">
          <h1>Admin level html</h1>
        </RoleGuardLayout>
        <Box>This is a box</Box>
      </Base>
    </>
  )
}

export default Home
