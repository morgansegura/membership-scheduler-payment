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
				<Box
					border={{ xs: '1px solid primary.green', sm: '2px solid secondary.dark' }}
					// borderBottom={}
					// borderBottomColor={}
					// borderColor={}
					// borderLeft={}
					// borderLeftColor={}
					// borderRadius={}
					// borderRight={}
					// borderRightColor={}
					// borderTop={}
					// borderTopColor={}
					// boxShadow={}
					// displayPrint={}
					// displayRaw={}
					// alignContent={}
					// alignItems={}
					// alignSelf={}
					// flex={}
					// flexDirection={}
					// flexGrow={}
					// flexShrink={}
					// flexWrap={}
					// justifyContent={}
					// order={}
					// gap={}
					// columnGap={}
					// rowGap={}
					// gridColumn={}
					// gridRow={}
					// gridAutoFlow={}
					// gridAutoColumns={}
					// gridAutoRows={}
					// gridTemplateColumns={}
					// gridTemplateRows={}
					// gridTemplateAreas={}
					// gridArea={}
					// bgColor={}
					// color={}
					// bottom={}
					// left={}
					// position={}
					// right={}
					// top={}
					// zIndex={}
					// height={}
					// maxHeight={}
					// minHeight={}
					// maxWidth={}
					// minWidth={}
					// width={}
					// boxSizing={}
					// m={}
					// mb={}
					// ml={}
					// mr={}
					// mt={}
					// mx={}
					// my={}
					// marginInline={}
					// marginInlineStart={}
					// marginInlineEnd={}
					// marginBlock={}
					// marginBlockStart={}
					// marginBlockEnd={}
					// p={}
					// pb={}
					// pl={}
					// pr={}
					// pt={}
					// px={}
					// py={}
					// paddingInline={}
					// paddingInlineStart={}
					// paddingInlineEnd={}
					// paddingBlock={}
					// paddingBlockStart={}
					// paddingBlockEnd={}
					// typography={}
					// fontFamily={}
					// fontSize={}
					// fontStyle={}
					// fontWeight={}
					// letterSpacing={}
					// lineHeight={}
					// textAlign={}
				>
					This is a box
				</Box>
			</Base>
		</>
	)
}

export default Home
