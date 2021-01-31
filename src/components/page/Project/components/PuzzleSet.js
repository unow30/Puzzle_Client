import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Img1 from '../../../../images/icon/img.jpg'
import Img2 from '../../../../images/icon/puzzle_3x3.jpg'
import { MdClose } from 'react-icons/md'
import axios from 'axios'

export const PuzzleSet = ({ showPuzzleSet, setShowPuzzleSet }) => {
  const modalRef = useRef()

  // const [currMem, setCurrMem] = useState(['김코딩'])

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showPuzzleSet ? 1 : 0,
    transform: showPuzzleSet ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowPuzzleSet(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showPuzzleSet) {
        setShowPuzzleSet(false)
      }
    },
    [setShowPuzzleSet, showPuzzleSet]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  // const onSubmit = async e => {
  //   e.preventDefault()
  // }
  const onChange = e => {
    const {
      target: { name, value },
    } = e

    if (name === 'name') {
      setName(value)
    }
    if (name === 'tel') {
      setPhone(value)
    }
  }

  return (
    <>
      {showPuzzleSet ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showPuzzleSet={showPuzzleSet}>
              <Title>퍼즐 설정</Title>
              <PuzzleImg />
              <PuzzleSetContainer>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>3 X 3</PuzzleSize>
                </PuzzleSetBox>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>4 X 4</PuzzleSize>
                </PuzzleSetBox>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>5 X 5</PuzzleSize>
                </PuzzleSetBox>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>6 X 6</PuzzleSize>
                </PuzzleSetBox>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>7 X 7</PuzzleSize>
                </PuzzleSetBox>
                <PuzzleSetBox>
                  <PuzzleImg2 />
                  <PuzzleSize>8 X 8</PuzzleSize>
                </PuzzleSetBox>
              </PuzzleSetContainer>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowPuzzleSet(prev => !prev)}
              />
              <ChangeImgbtn>사진변경</ChangeImgbtn>
              <Confirmbtn onClick={() => setShowPuzzleSet(prev => !prev)}>
                확인
              </Confirmbtn>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: fixed;
  left: 35%;
  top: 30%;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #052439;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 12px;
    display: none;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`

const Title = styled.div`
  font-size: 2rem;
  color: white;
  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
`
const PuzzleImg = styled.div`
  background-image: url(${Img1});
  width: 250px;
  height: 250px;
  margin-left: 40px;
  border-radius: 5%;
  background-size: cover;
  background-color: white;
`
const PuzzleImg2 = styled.a`
  background-image: url(${Img2});
  width: 80px;
  height: 80px;
  border-radius: 5%;
  background-size: cover;
  background-color: white;
  &:active,
  &:focus,
  &:target {
    border: 3px solid red;
  }
`
const PuzzleSize = styled.div`
  color: white;
  font-size: 1.1rem;
  padding-top: 5px;
  padding-left: 20px;
`

const PuzzleSetBox = styled.span`
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`

const PuzzleSetContainer = styled.div`
  display: flex;
  position: relative;
  top: -250px;
  left: 130px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  width: 300px;
  height: 220px;
`

const ChangeImgbtn = styled.button`
  position: relative;
  top: -200px;
  left: 200px;
  border-radius: 10px;
  border: none;
  background: #fa991d;
  color: white;
  width: 80px;
  height: 38px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`
const Confirmbtn = styled.button`
  position: relative;
  top: 10px;
  left: 250px;
  border-radius: 10px;
  border: none;
  background: #fa991d;
  font-size: 1.3rem;
  color: white;
  width: 120px;
  height: 50px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`
