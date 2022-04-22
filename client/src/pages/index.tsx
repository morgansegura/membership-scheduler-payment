import React from 'react'
// [Comonents]
import { Base, HeadContent, RoleGuardLayout } from 'components'
// [Utils]
import { siteMetadata } from 'utils'
import { Content } from 'styles/Container'

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
				<Content>
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
				</Content>
				<p>
					{[...new Array(30)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
						)
						.join('\n')}
				</p>
			</Base>
		</>
	)
}

export default Home
