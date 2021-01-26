import React, { useState } from 'react'
import styled from 'styled-components'
import { Preview } from 'styled-icons/material-rounded'
import Img from '../../../../images/icon/img.jpg'

import { NewProjectModal } from './NewProjectModal'
// import {useHistory} from 'react-router-dom'

const Contents = () => {
  // const history=useHistory()

  const [showNewProject, setShowNewProject] = useState(false)
  const openProjectModal = () => {
    setShowNewProject(prev => !prev)
    console.log('클릭')
  }
  return (
    <>
      <Div>
        <HomeNav>
          <SearchBar
            type="text"
            placeholder="프로젝트 이름을 입력하세요."
          ></SearchBar>
          <Select>
            <option selected>프로젝트 정렬</option>
            <option>생성일</option>
            <option>이름</option>
          </Select>
          <CreateBtn onClick={openProjectModal}>새 프로젝트</CreateBtn>
          {/* <CreateBtn onClick={() => history.push('./project')}></CreateBtn> */}
        </HomeNav>
        <Div2>
          <ProjectBox>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
            <ProjectList>
              <ProjectListImg />
            </ProjectList>
          </ProjectBox>
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
  width: calc(100vw - 500px);
  background-color: red;
  height: 100%;
`
const Div2 = styled.div`
  position: relative;
  top: 15%;
  background-color: green;
  width: calc(100vw - 500px);
  height: 85%;
  justify-content: space-between;
`

const HomeNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2%;
  margin-top: 3%;
  width: 20vw;
  float: right;
`
const SearchBar = styled.input`
  background-color: #afafaf;
  border: transparent;
  border-radius: 50px;
  padding: 10px;
  color: white;
  width: 8vw;
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
const ProjectList = styled.div`
  border-radius: 10px;
  background-color: white;
  background-size: cover;
  width: 13vw;
  height: 25vh;

  //   background-image: url(${Img});
`
const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: calc(100vw - 1000px);
  height: 85%;
  flex-wrap: wrap;
  margin: 0px auto;
`
const ProjectListImg = styled.div`
  background-image: url(${Img});
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
  background-color: white;
  margin: 25% 25%;
`
