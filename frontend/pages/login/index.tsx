import React, { useState, useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const LoginPage = () => {
  const [inputValue, setInputValue] = useState({
    email: 'john@email.com',
    password: '123456',
  })

  const [userLoginAccount, { data }] = useLazyQuery(USER_LOGIN_ACCOUNT, {
    onCompleted: (cache) => {
      console.log(cache)
    },
    variables: inputValue,
  })

  useEffect(() => {
    //console.log(data)
  }, [data])

  return <div onClick={() => userLoginAccount()}>index</div>
}

const USER_LOGIN_ACCOUNT = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      _id
      email
      name
    }
  }
`

export default LoginPage
