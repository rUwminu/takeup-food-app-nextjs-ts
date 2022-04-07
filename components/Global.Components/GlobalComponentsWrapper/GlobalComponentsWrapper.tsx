import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Components
import Header from './Header'

const GlobalComponentsWrapper: React.FC = ({ children }) => {
  return (
    <WrapperContainer>
      <Header />
      {children}
    </WrapperContainer>
  )
}

const WrapperContainer = styled.div`
  ${tw`
    px-6
    w-full
    overflow-x-hidden
  `}

  .section-container {
    ${tw`
      mx-auto
      w-full
      max-w-6xl
    `}
  }
`

export default GlobalComponentsWrapper
