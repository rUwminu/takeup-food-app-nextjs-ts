import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import {
  split,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

// Components
import Header from './Header'

const GlobalComponentsWrapper: React.FC = ({ children }) => {
  const httpLink = new HttpLink({
    //uri: 'https://unshift-scheduler-api.herokuapp.com/graphql',
    uri: `http://localhost:4000/graphql`,
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <WrapperContainer>
        <Header />
        {children}
      </WrapperContainer>
    </ApolloProvider>
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
