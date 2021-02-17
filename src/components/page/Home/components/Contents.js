import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Img from '../../../../images/icon/img.jpg'
import { BiSearch } from 'react-icons/bi'

import { NewProjectModal } from './NewProjectModal'
// import {useHistory} from 'react-router-dom'

const Contents = (projectData) => {
  // const history=useHistory()
  const history = useHistory()

  const [showNewProject, setShowNewProject] = useState(false)
  //const [data, setData] = useState({})
  let project = [];
  let projectValue = [];

  const openProjectModal = () => {
    setShowNewProject(prev => !prev)
    // console.log('클릭')
  }

  projectData.projectData.map(i => {
    project[i.id] = i;
  })

  project.forEach((data, i) => {
    //   projectValue[project[i].id] = 
    //   <Project>
    //   <ProjectUser_Containers>
    //    <ProjectUser_img src = {project[i].usersData[j].profileImg}></ProjectUser_img>
    //   </ProjectUser_Containers>
    //   <ProjectTitle>{project[i].title}</ProjectTitle>
    //   <ProjectImg />
    //   <ProjectDesc>{project[i].description}</ProjectDesc>
    //   <ProjectDate>{project[i].createdAt.substring(0, 19).replace('T', ' ')}</ProjectDate>
    // </Project>

  })

  //console.log(project);

  return (
    <>
      <Div className="row">
        <HomeNav>
          <SearchBarBox>
            <SearchBar
              type="text"
              placeholder="프로젝트 이름을 입력하세요."
            ></SearchBar>
            <SerachButton />
          </SearchBarBox>
          <Select>
            <option selected>프로젝트 정렬</option>
            <option>생성일</option>
            <option>이름</option>
          </Select>
          <CreateBtn onClick={openProjectModal}>새 프로젝트</CreateBtn>
          {/* <CreateBtn onClick={() => history.push('./project')}></CreateBtn> */}
        </HomeNav>
        <Div2>
          {/* <button onClick={getProjectData}>테스트</button>
          <button onClick={test}>테스트2</button> */}
          <ProjectContainer>
            {projectValue}
          </ProjectContainer>
        </Div2>
      </Div>
      <NewProjectModal
        showNewProject={showNewProject}
        setShowNewProject={setShowNewProject}
      />
    </>
  )
}

export default Contents

// <------------ css ------------> //

const Div = styled.div`
  // max-width: 1140px;

  width: calc(100vw - 500px);
  // background-color: red;
  height: 100%;
`
const Div2 = styled.div`
  position: relative;

  width: calc(100vw - 500px);
  top: 15%;
  height: 85%;
`

const HomeNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2%;
  margin-top: 3%;
  width: 20vw;
  float: right;
`
const SearchBarBox = styled.div`
  background-color: #afafaf;
  border-radius: 50px;
  color: white;
  width: 12vw;
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const SearchBar = styled.input`
  border: transparent;
  padding: 8px;
  background-color: transparent;
  width: 7vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #052439;
  }
  font-size: 14px;
`

const Select = styled.select`
  width: 5vw;
  height: 41px;
  background: #565656;
  border-radius: 50px;
  color: white;
  padding-left: 10px;
  font-size: 14px;
  border: none;
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
const CreateBtn = styled.button`
  background: #565656;
  border-radius: 30px;
  width: 5vw;
  height: 41px;
  color: white;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  border: transparent;
`
const Project = styled.div`
  border-radius: 10px;
  background-color: white;
  background-size: cover;
  width: 15vw;
  height: 27vh;
  margin: 15px;
  cursor: pointer;

  //   background-image: url(${Img});
`
const ProjectContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
`
const ProjectImg = styled.div`
  background-image: url(${Img});
  width: 130px;
  height: 130px;
  border-radius: 10px;
  border: 2px solid #afafaf;
  background-size: cover;
  background-color: white;
  margin: auto;
  margin-top: 30px;
`

const ProjectTitle = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: bold;
`
const ProjectDesc = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.1rem;
`

const ProjectDate = styled.div`
  text-align: start;
  margin-top: 50px;
  margin-left: 20px;
  font-size: 0.9rem;

  color: #afafaf;
`

const SerachButton = styled(BiSearch)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 0;
  color: white;
`

const ProjectUser_Containers = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 30px;
  background-color:red;
  display: flex;
  justify-content: flex-end;
`

const ProjectUser_img = styled.img`
width: 50px;
height: 30px;
background-color:blue;
`
