import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { FindEamilModal } from './FindEmailModal'
import { FindPwModal } from './FindPwModal'

import LoginError from './LoginError'

export const Login = ({ setSignUp }) => {
  const history = useHistory()

  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showPwModal, setShowPwModal] = useState(false)
  const [showLoginErrorModal, setShowLoginErrorModal] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChange = e => {
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const handleLogin = e => {
    axios
      .post('https://api.teampuzzle.ga:4000/user/login', {
        email,
        password,
      })
      .then(res => {
        sessionStorage.setItem('accessToken', res.data.accessToken)
        history.push('/home')
      })
      .catch(setShowLoginErrorModal(perv => !perv))
  }

  const openEmailModal = () => {
    setShowEmailModal(perv => !perv)
  }

  const onSignUp = () => {
    setSignUp(prev => !prev)
  }

  const openPwModal = () => {
    setShowPwModal(perv => !perv)
  }

  return (
    <div>
      <UserInfoBox>
        <UserInfoInput
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <UserInfoInput
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </UserInfoBox>
      <LoginBox>
        <Loginbtn onClick={handleLogin}>Login</Loginbtn>
        <FindUserInfobtn onClick={openEmailModal}>Find Email</FindUserInfobtn>
        <FindUserInfobtn onClick={openPwModal}>Find PW</FindUserInfobtn>
        <SignUpbtn onClick={onSignUp}>Sign Up</SignUpbtn>
      </LoginBox>
      <FindEamilModal
        showEmailModal={showEmailModal}
        setShowEmailModal={setShowEmailModal}
      />
      <FindPwModal showPwModal={showPwModal} setShowPwModal={setShowPwModal} />
      <LoginError
        showLoginErrorModal={showLoginErrorModal}
        setShowLoginErrorModal={setShowLoginErrorModal}
      ></LoginError>
    </div>
  )
}

const UserInfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  right: 10vw;
  top: 40vh;
  height: 8vh;
  background-color: transparent;
`
const UserInfoInput = styled.input`
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid #ef4d70;
  padding-bottom: 10px;
  color: white;
  width: 10vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  font-size: 1.1rem;
`

const LoginBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  color: white;
  right: 10vw;
  top: 53vh;
  height: 20vh;
  width: 10vw;
  background-color: transparent;
`
const Loginbtn = styled.button`
  border-radius: 8px;
  color: white;
  width: 12vw;
  height: 4vh;
  background-color: #afafaf;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`

const FindUserInfobtn = styled.button`
  border-radius: 8px;
  color: white;
  width: 12vw;
  height: 4vh;
  background-color: #1c7690;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
const SignUpbtn = styled.button`
  border-radius: 8px;
  color: balck;
  width: 12vw;
  height: 4vh;
  background-color: white;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
