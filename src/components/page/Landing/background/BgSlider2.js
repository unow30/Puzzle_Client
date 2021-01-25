import React, { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'
import Bcak01 from '../Img/LandingImg01.jpg'
import { Back01 } from './Background01'
// import { Back02 } from './Background02'
// import { Back03 } from './Background03'

const Container = styled.div`
  width: 100vw;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
  margin: 0 auto:
`
const SliderContainer = styled.div`
  display: flex;
`

// const BackImg01 = styled.div`
//   background: 271.76deg,
//       #000000 5.77%,
//       rgba(255, 255, 255, 0) 99.13%
//     ),
//     url(${Bcak01}) no-repeat bottom fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100vh;
// `

const TOTAL_SLIDES = 2
export default function Slider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)` // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide])
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <img src={Bcak01} style={{ height: '100vh', width: '100vw' }} />
        {children}
        <Back01 />

        <img src={Bcak01} style={{ height: '100vh', width: '100vw' }} />
        {children}
        <Back01 />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  )
}

// export const Back01 = ({ children }) => {
//   return (
//     <BackImg01>
//       <MainTextBox>
//         <MainCopy>퍼즐 한 조각</MainCopy>
//         <MainCopy>=</MainCopy>
//         <MainCopy>업무카드 하나</MainCopy>
//         <br />
//         <br />
//         <br /> <br />
//         <br />
//         <br />
//         <MainContents>퍼즐 한 조각은 업무카드 하나입니다.</MainContents>
//         <br />
//         <br />
//         <br />
//         <MainContents>업무를 완료하면 퍼즐조각 하나가 맞춰집니다.</MainContents>
//         <br />
//         <br />
//         <br />
//         <MainContents>
//           팀원끼리 업무 진척도를 퍼즐개수로 설명해 줄 수 있습니다.
//         </MainContents>
//         <br />
//         <br />
//         <br />
//         <MainContents>
//           업무카드에 코멘트를 달아서 피드백을 줄 수 있습니다.
//         </MainContents>
//         <br />
//         <br />
//         <br />
//       </MainTextBox>
//       {children}
//     </BackImg01>
//   )
// }

// const BackImg01 = styled.div`
//   background-color: red;

//   height: 100vh;
// `
// const MainCopy = styled.h1`
//   font-weight: bold;
//   font-size: 60px; ;
// `
// const MainTextBox = styled.div`
//   position: absolute;
//   top: 18vh;
//   right: 40vw;
//   display: flex;
//   align-items: center;
//   display: block;
//   color: #ffffff;
//   text-align: center;
// `

// const MainContents = styled.p`
//   font-weight: bold;
//   font-size: 30px;
// `
