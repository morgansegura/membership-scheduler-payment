import React from 'react'

// [Components]
import { Header } from 'components/layouts'
// [Styles]
import { Wrapper, Container, Main } from 'styles/Container'
import { BGContainer, BGThemeColorsFromBottom } from 'styles/Backgrounds'
type Props = {
  children?: React.ReactChild | React.ReactChild[]
}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  )
}

export default Base
