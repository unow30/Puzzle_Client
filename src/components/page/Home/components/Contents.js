import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'

import { NewProjectModal } from './NewProjectModal'
// import {useHistory} from 'react-router-dom'

const Contents = (projectData) => {
  const history = useHistory()
  const [showNewProject, setShowNewProject] = useState(false)
  const [data, setData] = useState([])
  let project = [];
  let projectValue = [];
  const accessToken = sessionStorage.getItem('accessToken')

  const openProjectModal = () => {
    setShowNewProject(prev => !prev)
    // console.log('클릭')
  }

  const getProjectInfo = (projectId) => {
    //1. axios로 project/:projectId GET 요청
    //2. 받아온 데이터를 App 컴포넌트의 state에 저장

    axios
      .get(`https://api.teampuzzle.ga:4000/project/${projectId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        const projectInfo = res.data;
        const stringInfo = JSON.stringify(projectInfo);
        sessionStorage.setItem('projectInfo', stringInfo);
        const refreshInfo = JSON.parse(sessionStorage.getItem('projectInfo'));
        projectData.projectUp(refreshInfo);
      })
      .then(res => history.push("/project"))
  }
   // console.log(data)  //data는 프로젝트 정보와 그 프로젝트에 속한 팀원의 정보가 담긴 '배열'
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
            <option defaultValue>프로젝트 정렬</option>
            <option>생성일</option>
            <option>이름</option>
          </Select>
          <CreateBtn onClick={openProjectModal}>새 프로젝트</CreateBtn>
          {/* <CreateBtn onClick={() => history.push('./project')}></CreateBtn> */}
        </HomeNav>
        <Div2>
          {/* <button onClick={getProjectData}>테스트</button>
          <button onClick={test}>테스트2</button> */}
          {
            projectData.projectData.map(info => {
              //console.log(info.usersData)
              return (
                <ProjectContainer key={info.id}>
                  <Project onClick={() => getProjectInfo(info.id)}>
                    <ProjectUser_Containers >
                      {
                        info.usersData.map(profile => {
                          return (
                            <ProjectUser_img src={profile.profileImg} key={profile.id} title={profile.name} alt={profile.name}/>
                          )
                        })
                      }
                    </ProjectUser_Containers>
                    <ProjectTitle>{info.title}</ProjectTitle>
                    <ProjectImg src={info.projectImg} />
                    <ProjectDesc>{info.description}</ProjectDesc>
                    <ProjectDate>생성일: {info.createdAt.slice(0, 10)}</ProjectDate> {/* 날짜 표기 형식에 맞게 변경해야함 */}
                  </Project>
                </ProjectContainer>
                
              )
            })
          }
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
  width: 100%;
  min-height: 100%;
  overflow: auto;
  // background-color: red;
  margin: 1rem;
`

const Div2 = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.2rem;
  width: calc(100vw - 500px);
`

const HomeNav = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 73vw;
  float: right;
  margin-right: 1rem;
`
const SearchBarBox = styled.span`
  background-color: #afafaf;
  border-radius: 50px;
  color: white;
  width: 12vw;
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

const SearchBar = styled.input`
  border: transparent;
  padding: 7.5px;
  background-color: transparent;
  width: 10vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #052439;
    text-align: center;
  }
  font-size: 14px;
`

const Select = styled.select`
  width: 7vw;
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
const ProjectContainer = styled.div`
  // border: 3px solid #73AD21;
  cursor: pointer;
  position: sticky;
  display: flex;
  height: 20rem;
  width: 20rem;
  margin-top: 1rem;
  `

const Project = styled.span`
  border-radius: 13px;
  background-color: white;
  background-size: cover;
  width: 15vw;
  height: 30vh;
  margin: 10px;
  position: reletive
  cursor: pointer;
`
const ProjectImg = styled.img`
  display: block;
  position: static;
  width: 7vw;
  height: 6vw;
  border-radius: 10px;
  border: 2px solid #afafaf;
  background-size: cover;
  background-color: white;
  margin: 0px auto;
  margin-top: 15px;
  
`

const ProjectTitle = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
`

const ProjectDesc = styled.div`
  text-align: center;
  margin-top: 0.9rem;
  font-size: 1.1rem;
`

const ProjectDate = styled.div`
  text-align: left;
  margin-top: 1.1rem;
  margin-left: 1.5rem;
  font-size: 0.9rem;
  color: #afafaf;
`

const SerachButton = styled(BiSearch)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 0;
  color: white;
  margin-right: 0.5rem;
`

const ProjectUser_Containers = styled.span`
  border-radius: 13px 13px 0px 0px;
  width: 100%;
  height: 35px;
  background-color: rgb(103, 145, 182);;
  display: flex;
  justify-content: flex-end;
`

const ProjectUser_img = styled.img`
width: 28px;
height: 28px;
object-fit: cover;
background-color:blue;
border-radius: 70%;
margin-top: 3px;
margin-left: 3px;
margin-right: 5px;
`
