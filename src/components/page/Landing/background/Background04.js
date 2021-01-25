import React, { useState } from 'react'
import styled from 'styled-components'

import backImg from '../Img/LandingImg04.jpeg'

export const Back04 = ({ children }) => {
  return (
    <BackImg01>
      <Maincopy>퍼즐 한 조각 = 업무카드 하나</Maincopy>
      <MaunContents>
        퍼즐 한 조각은 업무카드 하나입니다.
        <br /> 업무를 완료하면 퍼즐조각 하나가 맞춰집니다.
        <br /> 팀원끼리 업무 진척도를 퍼즐개수로 설명해 줄 수 있습니다.
        <br />
        업무카드에 코멘트를 달아서 피드백을 줄 수 있습니다.
      </MaunContents>
      {children}
    </BackImg01>
  )
}

const BackImg01 = styled.div`
  background: linear-gradient(
      271.76deg,
      #000000 5.77%,
      rgba(255, 255, 255, 0) 99.13%
    ),
    url(${backImg}) no-repeat bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  z-index: -1000;
`
const Maincopy = styled.h1`
  position: absolute;
  height: 178px;
  top: 10vh;
  right: 40vw;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 154px;
  display: flex;
  align-items: center;

  color: #ffffff;
`

const MaunContents = styled.p`
  position: absolute;
  height: 178px;
  top: 40vh;
  right: 43vw;
  font-style: normal;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 70px;
  display: flex;
  align-items: center;

  color: #ffffff;
`
