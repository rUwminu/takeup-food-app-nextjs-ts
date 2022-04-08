import type { NextPage } from 'next'
import tw from 'twin.macro'
import styled from 'styled-components'

import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <TempContainer>
      <Head>
        <title>TakeUp!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Hello</div>
    </TempContainer>
  )
}

const TempContainer = styled.div`
  ${tw`
  w-full
    text-red-600
  `}
`

export default Home
