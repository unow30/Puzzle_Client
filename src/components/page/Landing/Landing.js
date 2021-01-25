import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

//라이브러리

import logo from './Img/Puzzle_Logo_ Square.png'
//이미지

import { Back01 } from './background/Background01'
import { Back02 } from './background/Background02'
import { Back03 } from './background/Background03'
import { Back04 } from './background/Background04'
import BgSlider from './background/BgSlider'
import BgSlider2 from './background/BgSlider2'
import { Login } from './user/Login'
import { SignUp } from './user/SignUp'

//컴포넌트

const Landing = () => {
  const history = useHistory()

  const [signUp, setSignUp] = useState(true)

  const onSubmit = async e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <Back01>
        <Logo />
        <Guestbtn onClick={() => history.push('./home')}>체험하기</Guestbtn>
        {signUp ? (
          <Login setSignUp={setSignUp} />
        ) : (
          <SignUp setSignUp={setSignUp} />
        )}
      </Back01>
    </form>
    // <BgSlider></BgSlider>
  )
}

export default Landing

// <------------ Common ------------> //

const Guestbtn = styled.button`
  position: absolute;
  height: 178px;
  top: 3vh;
  right: 90vw;
  border-radius: 15px;
  color: white;
  width: 5vw;
  height: 5vh;
  background-color: #fa991d;
  cursor: pointer;

  font-size: 1rem;
  &:active,
  &:focus {
    outline: none;
  }
`

const Logo = styled.div`
  background-image: url(${logo});
  width: 80px;
  height: 80px;
  background-size: cover;
  position: absolute;
  right: 12.8vw;
  top: 10vh;
`
