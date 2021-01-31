import React, { useState } from 'react'
import styled from 'styled-components'
import Img from '../../../../images/icon/img.jpg'
import Puzzle from 'react-image-puzzle'
import Puzzle9 from './Puzzle9'
import { PuzzleSet } from './PuzzleSet'
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle'

const ProjectContent = () => {
  const [showPuzzleSet, setShowPuzzleSet] = useState(false)

  const openPuzzleSet = () => {
    setShowPuzzleSet(prev => !prev)
    // console.log('클릭')
  }

  return (
    <ProjectContent_Container>
      <Project_title>ABO</Project_title>
      <ProjectPuzzleImg>
        {/* <Puzzle image={Img} /> */}
        {/* <Puzzle9 /> */}
      </ProjectPuzzleImg>
      <ProjectPuzzleSetbtn onClick={openPuzzleSet}>
        퍼즐설정
      </ProjectPuzzleSetbtn>
      <DivisionWorkBox>
        <PuzzlePeaceSelect>
          <option selected>퍼즐조각 선택</option>
          <option>퍼즐조각 1</option>
          <option>퍼즐조각 2</option>
          <option>퍼즐조각 3</option>
          <option>퍼즐조각 4</option>
          <option>퍼즐조각 5</option>
          <option>퍼즐조각 6</option>
          <option>퍼즐조각 7</option>
          <option>퍼즐조각 8</option>
          <option>퍼즐조각 9</option>
        </PuzzlePeaceSelect>
        <PuzzlePeaceSelect>
          <option selected>담당자</option>
          <option>이순신</option>
          <option>홍길동</option>
          <option>김민수</option>
          <option>김윤성</option>
          <option>김윤호</option>
          <option>조희건</option>
        </PuzzlePeaceSelect>
        <PuzzlePeaceInformation type="text" placeholder="업무내용" />
      </DivisionWorkBox>

      <CommentBox>
        <CommentTitle>Comment Area</CommentTitle>
        <CommentInputMessage type="text" placeholder="코멘트를 입력해주세요" />
        <CommentInputMessagebtn>등록</CommentInputMessagebtn>
        <CommentContentBox>
          <CommentContentUserImg />
          <CommentContentUserName>이순신</CommentContentUserName>
          <CommentContentUserMessage>
            기능플로우 제작중입니다.
          </CommentContentUserMessage>
          <CommentContentUserDate>2020-01-13 10:20</CommentContentUserDate>
        </CommentContentBox>
      </CommentBox>
      <PuzzleSet
        showPuzzleSet={showPuzzleSet}
        setShowPuzzleSet={setShowPuzzleSet}
      />
    </ProjectContent_Container>
  )
}

export default ProjectContent

// <------------ css ------------> //

const ProjectContent_Container = styled.div`
  background-color: #052439;
  width: calc(100vw - 500px);
  height: 100%;
  border-radius: 30px;
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

const Project_title = styled.div`
  color: white;
  font-size: 3rem;
  text-align: center;
  margin: auto;
  margin-top: 5vh;
  font-weight: bold;
  display: block;
`
const ProjectPuzzleImg = styled.div`
  background-image: url(${Img});
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 5px solid #afafaf;
  background-size: cover;
  background-color: white;
  margin-top: 30px;
  margin-left: 100px;
  float: left;
`

const ProjectPuzzleSetbtn = styled.button`
  position: relative;
  background: #fa991d;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 1.1rem;
  float: left;
  display: block;
  border: none;
  border-radius: 10px;
  top: 370px;
  left: -200px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`

const DivisionWorkBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32vw;
  position: relative;
  top: 50px;
  left: 0px;
`

const PuzzlePeaceSelect = styled.select`
  width: 5vw;
  height: 41px;
  background: #white;
  color: black;
  padding-left: 10px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
  option {
    color: black;
    width: 5vw;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
const PuzzlePeaceInformation = styled.input`
  width: 20vw;
  height: 38px;
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: black;
    font-size: 14px;
  }
`
//position: relative;
const CommentBox = styled.div`
  position: relative;
  width: calc(100vw - 700px);
  height: 80vh;
  background-color: #afafaf;
  top: 420px;
  margin-left: 5%;
  border-radius: 20px;
`
const CommentTitle = styled.div`
  position: relative;
  top: 50px;
  left: 12vw;
  color: black;
  font-size: 3rem;
  font-weight: bold;
`

const CommentInputMessage = styled.input`
  margin-top: 150px;
  margin-left: 10vw;
  width: 20vw;
  height: 38px;
  border: none;
  border-radius: 10px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: black;
    font-size: 14px;
  }
`
const CommentInputMessagebtn = styled.button`
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
const CommentContentBox = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 30px;
  width: 1200px;
  top: 80px;
  left: -20px;
  border-bottom: 1px solid white;
  justify-content: space-around;
  align-content: center;
  align-self: center;
  align-items: flex-center;
`

const CommentContentUserImg = styled(UserCircle)`
  width: 80px;
  height: 80px;
  color: red;
  display: flex;
  align-items: center;
`

const CommentContentUserName = styled.div`
  // width: 300px;
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`
const CommentContentUserMessage = styled.div`
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const CommentContentUserDate = styled.div`
  color: #797979;
  font-size: 1.1rem;
  justify-self: end;
  display: flex;
  align-items: center;
`

// border-radius:
