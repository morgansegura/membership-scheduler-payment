import React from 'react'

// [Styles]
import { GlobalStyle } from 'styles/config/globalStyles'

type Props = {
    children?: React.ReactChild[] | React.ReactChild
}

const ThemesProvider: React.FC<Props> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default ThemesProvider
