import React from 'react'
import { StyledAppBar } from 'styles/core/surfaces/AppBar'

type AppBarProps = {
	children?: React.ReactChild | React.ReactChild[]
}

const AppBar: React.FC<AppBarProps> = ({ children }) => {
	return <StyledAppBar className="AppBar-root">{children}</StyledAppBar>
}

export default AppBar
