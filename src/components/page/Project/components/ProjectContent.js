import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Img from '../../../../images/icon/img.jpg'
import { PuzzleSet } from './PuzzleSet'
import PuzzleInfo from './PuzzleInfo'
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const ProjectContent = (props) => {
  const [showPuzzleSet, setShowPuzzleSet] = useState(false)
  
  const refreshInfo = JSON.parse(sessionStorage.getItem('projectInfo'))

  const coordinates = [52, 57, 90];  //mockUp data 
  //실제 데이터 -> const fetchedCoordinates = props.projectinfo.project.coordinates || refreshInfo.project.coordinates

  //stringCoordinates: "12,23,45,67" 쉼표로 구분지어진 좌표값 / convertToNumber: stringCoordinates를 입력받아 숫자를 요소로 가진 배열로 변환
  const convertToNumber = (stringCoordinates) => {
    const stringArr = stringCoordinates.split(',');
    const result = [];
    for (el of stringArr) {
      result.push(Number(el))
    }
    return result;
  }  

  useEffect(() => {
    /* 
    const coordinates = convertToNumber(fetchedCoordinates);
    */
    coordinates.forEach(coordinate => {
      const grid = document.getElementById(`puzzle${coordinate}`);
      grid.style.zIndex = 2;
    })
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }


  const openPuzzleSet = () => {
    setShowPuzzleSet(prev => !prev)
    // console.log('클릭')
  }
  
/*   
  const block = document.getElementById("puzzle52");
  const block1 = document.getElementById("puzzle57");
  const block2 = document.getElementById("puzzle84")
  block.style.zIndex = 2;
  block1.style.zIndex = 2;
  block2.style.zIndex = 2;
 */
  const countFinished = () => {
    let result = 0;
    if (!props.projectInfo.project) {
      refreshInfo.project.puzzlesInfo.map(finished => {
        if (finished.isFinish === 1) {
          result++
        }
      })
    }else {
      props.projectInfo.project.puzzlesInfo.map(finished => {
      if (finished.isFinish === 1) {
        result++;
      }
      })
    }
    return result;
  }

  const sumPuzzle = () => {
    if (!props.projectInfo.project) {
      return refreshInfo.project.puzzlesInfo.length;
    }else {
      return props.projectInfo.project.puzzlesInfo.length;
    }
  };

  const puzzleFinished = countFinished();
  const puzzleSum = sumPuzzle();
  const percent = parseInt(puzzleFinished / sumPuzzle() * 100);
  
  const indexGenerator = () => {
    const index = [];
    for (let i=1; i<=100; i++) {
      index.push(i);
    }
    return index;
  }

  return (
    <ProjectContent_Container>
      <Project_title>{`<${!props.projectInfo.project ? refreshInfo.project.title : props.projectInfo.project.title}>`}</Project_title>
      <ProjectPuzzleImgSection>
      <PuzzleBlock className="wrapper"> 
        {indexGenerator().map(piece => {
          return <PuzzleBlank className="blank" id={"puzzle"+piece} key={piece}> {piece} </PuzzleBlank>
        })}
      </PuzzleBlock>
      <PuzzleImage src={!props.projectInfo.project ? refreshInfo.project.projectImg : props.projectInfo.project.projectImg}/>
      </ProjectPuzzleImgSection>
      <ProjectPuzzleSetbtn onClick={openPuzzleSet} >
        퍼즐 추가
      </ProjectPuzzleSetbtn>
      <ProjectInfoContainer>
        <TextContainer>
          <ProjectForm>Project Description :</ProjectForm>
          <ProjectForm>Project Progress :</ProjectForm>
          <ProjectForm>Team Member : </ProjectForm>
        </TextContainer>
        <InfoContainer>
          <ProjectInfo>{!props.projectInfo.project ? refreshInfo.project.description : props.projectInfo.project.description}</ProjectInfo>
          <ProjectInfo>{!puzzleSum ? "프로젝트에 퍼즐이 없습니다." : puzzleFinished + '/' + puzzleSum} ({!percent ? 0 : percent}%)</ProjectInfo>
          <ProjectInfo>
            {
              !props.projectInfo.project ? 
                refreshInfo.project.teams.map(member => {
                  return (
                    <TeamImage src={member.profileImg} key={member.id} title={member.name}/>
                  )
                }) :
                props.projectInfo.project.teams.map(member => {
                  return (
                    <TeamImage src={member.profileImg} key={member.id} title={member.name}/>
                  )
                })
            }
          </ProjectInfo>
        </InfoContainer>
      </ProjectInfoContainer>

      <PuzzleBox>  {/* => puzzleBox */}
        <Puzzles>
          <StyledSlider {...settings}>
            <PuzzleInfo></PuzzleInfo>
            <PuzzleInfo></PuzzleInfo>
            <PuzzleInfo></PuzzleInfo>
          </StyledSlider>

        </Puzzles>



{/*         <CommentTitle>Comment Area</CommentTitle>
        <CommentInputMessage type="text" placeholder="코멘트를 입력해주세요" cols="10" rows="10" />
        <CommentInputMessagebtn>등록</CommentInputMessagebtn>
        <CommentContentBox>
          <CommentContentUserImg />
          <CommentContentUserName>이순신</CommentContentUserName>
          <CommentContentUserMessage>
            기능플로우 제작중입니다.
          </CommentContentUserMessage>
          <CommentContentUserDate>2020-01-13 10:20</CommentContentUserDate>
        </CommentContentBox>
 */}      </PuzzleBox>
      <PuzzleSet
        showPuzzleSet={showPuzzleSet}
        setShowPuzzleSet={setShowPuzzleSet}
      />
    </ProjectContent_Container>
  )
}

export default ProjectContent

// <------------ css ------------> //
// #052439
const Puzzles = styled.div`
  border: 3px solid pink;
`
const StyledSlider = styled(Slider)`
  .slick-slide div{
    float: center;
}

`
const ProjectContent_Container = styled.div`
  background-color:  #052439;
  width: calc(100vw - 500px);
  height: 42rem;
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
  margin-top: 3vh;
  font-weight: bold;
  display: block;
`
const ProjectPuzzleImgSection = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 10px;
  border: 5px solid #afafaf;
  background-size: cover;
  background-color: white;
  margin-top: 1rem;
  margin-left: 100px;
  float: left;
`
const PuzzleBlock = styled.div`  /* (=wrapper) */
  display: grid;
  position: absolute;
  grid-template-columns: 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem;
  grid-template-rows: 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem;
`

const PuzzleBlank = styled.div`
  border: 3px solid  #052439;
  text-align: center;
  color: white;
  background-color: #afafaf;
`

const PuzzleImage = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-color: white;
  float: left;
  z-index: 1;
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
  top: 335px;
  left: -200px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`
const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32vw;
  position: relative;
  margin-top: 1.2rem;
`

const TextContainer = styled.div`
  font-weight: bold;
  color: white;
  border: 3px solid red;
`

const InfoContainer = styled.div`
  color: white;
  border: 3px solid red;

`

const ProjectForm = styled.div`
  margin: 3rem;
  font-size: 1.5rem;
  
`

const ProjectInfo = styled.div`
  margin: 3rem;
  font-size: 1.3rem;
  border: 3px solid #73AD21;
  
`

const TeamImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  background-color:blue;
  border-radius: 70%;
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 5px;
`




//position: relative;
const PuzzleBox = styled.div`
  border: 3px solid yellow;
  position: relative;
  width: calc(100vw - 700px);
  height: 80vh;
  background-color: #afafaf;
  top: 100px;
  margin-left: 7%;
  border-radius: 20px;
`
const CommentTitle = styled.span`
  text-align: center;
  border: 3px solid #73AD21;
  position: static;
  display: block;
  top: 50px;
  left: 12vw;
  margin: 0 auto;
  margin-top: 1rem;
  color: black;
  font-size: 2rem;
  font-weight: bold;
`

const CommentInputMessage = styled.textarea`
  margin-top: 150px;
  margin-left: 10vw;
  width: 40vw;
  height: 10vw;
  border: none;
  border-radius: 10px;
  text-align: center;
  resize: none;
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
