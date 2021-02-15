import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Home_Header from '../template/Header'
import Home_SideBar_Left from '../template/SideBarLeft'
import Home_SideBar_Right from '../template/SideBarRight'
import Home_Footer from '../template/Footer'
import axios from 'axios'

import Contents from './components/Contents'

import background_img from '../../../images/background/background.jpg'

const Home = () => {

  const [projectData,setProjectData] = useState({});
  const [loading,setLoading] = useState(true);

  const accessToken = sessionStorage.getItem('accessToken')

  useEffect(() => {
    axios.get('https://api.teampuzzle.ga:4000/home',{
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
    })
    .then(res => {
      let {projects} = res.data;
      setProjectData(projects);
      setLoading(false);
    })
  },[])

  return (
    <Background>
      <Backgroundgradient>
        <Home_Header></Home_Header>
        <Calendar_Content_Containers>
          <Home_SideBar_Left></Home_SideBar_Left>
          {loading ? (
            <>
            </>
          ) : (
            <Contents projectData = {projectData} />
          )}
          <Home_SideBar_Right></Home_SideBar_Right>
        </Calendar_Content_Containers>
        <Home_Footer></Home_Footer>
      </Backgroundgradient>
    </Background>
  )
}

export default Home

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
