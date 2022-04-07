import type { NextPage } from 'next'
import tw from 'twin.macro'
import styled from 'styled-components'

import Head from 'next/head'

const Home: NextPage = () => {
  return <TempContainer>Hello</TempContainer>
}

const TempContainer = styled.div`
  ${tw`
    text-red-600
  `}
`

export default Home
