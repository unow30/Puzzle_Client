import React from 'react'
import styled from 'styled-components'

import backImg from '../Img/LandingImg02.jpg'

export const Back02 = ({ children }) => {
  return (
    <BackImg01>
      <MainTextBox>
        <MainCopy>퍼즐 한 조각</MainCopy>
        <MainCopy>=</MainCopy>
        <MainCopy>업무카드 하나</MainCopy>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <MainContents>퍼즐 한 조각은 업무카드 하나입니다.</MainContents>
        <br />
        <br />
        <br />
        <MainContents>업무를 완료하면 퍼즐조각 하나가 맞춰집니다.</MainContents>
        <br />
        <br />
        <br />
        <MainContents>
          팀원끼리 업무 진척도를 퍼즐개수로 설명해 줄 수 있습니다.
        </MainContents>
        <br />
        <br />
        <br />
        <MainContents>
          업무카드에 코멘트를 달아서 피드백을 줄 수 있습니다.
        </MainContents>
        <br />
        <br />
        <br />
      </MainTextBox>
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
`
const MainCopy = styled.h1`
  font-weight: bold;
  font-size: 60px; ;
`
const MainTextBox = styled.div`
  position: absolute;
  top: 18vh;
  right: 40vw;
  display: flex;
  align-items: center;
  display: block;
  color: #ffffff;
  text-align: center;
`

const MainContents = styled.p`
  font-weight: bold;
  font-size: 30px;
`

// const MainContentsBox = styled.div`
//   position: absolute;
//   top: 40vh;
//   right: 40%;
//   display: flex;
//   align-items: center;
//   display: block;
//   color: #ffffff;
//   text-align: center;
// `

// position: absolute;
// top: 40vh;
// right: 43vw;
// display: flex;
// align-items: center;
// color: #ffffff;
// text-align: center;

// const MainCopy = styled.h1`
//   font-style: normal;
//   font-weight: bold;
//   font-size: 60px; ;
// `
// const MainTextBox = styled.div`
//   position: relative;
//   top: 20%;

//   display: flex;
//   align-items: center;
//   display: block;
//   color: #ffffff;
//   text-align: center;
// `

// const MainContents = styled.p`
//   font-style: normal;
//   font-weight: bold;
//   font-size: 30px;
// `

// const MainContentsBox = styled.div`
//   position: relative;
//   top: 30%;

//   display: flex;
//   align-items: center;
//   display: block;
//   color: #ffffff;
//   text-align: center;
// `
