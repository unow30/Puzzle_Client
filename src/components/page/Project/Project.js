import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Project_Header from '../template/Header'
import Project_SideBar_Left from '../template/SideBarLeft'
import Project_SideBar_Right from '../template/SideBarRight'
import Project_Footer from '../template/Footer'

import ProjectContent from './components/ProjectContent'

import background_img from '../../../images/background/background.jpg'

const Project = (props) => {
  const projectInfo = props.projectInfo
  return (
    <Background>
      <Backgroundgradient>
        <Project_Header></Project_Header>
        <Calendar_Content_Containers>
          <Project_SideBar_Left></Project_SideBar_Left>
          <ProjectContent projectInfo={projectInfo}></ProjectContent>
          <Project_SideBar_Right></Project_SideBar_Right>
        </Calendar_Content_Containers>
        <Project_Footer></Project_Footer>
      </Backgroundgradient>
    </Background>
  )
}

export default Project

// <------------ css ------------> //
const Background = styled.div`
  background-image: url('${background_img}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100wh;
  background-attachment: scroll;

  @media ${props => props.theme.mobile} {
    background-color: red;
    width: 500px;
    height: 500px;
  }
`
const Backgroundgradient = styled.div`
  background-repeat: no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-size: cover;
  height: 100vh;
  width: 100wh;
`

const Calendar_Content_Containers = styled.div`
  width: 100%;
  height: calc(100vh - 280px);
  display: flex;
`
