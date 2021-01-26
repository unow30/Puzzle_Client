import React, { useState } from 'react'
import styled from 'styled-components'
import Home_Header from '../template/Header'
import Home_SideBar_Left from '../template/SideBarLeft'
import Home_SideBar_Right from '../template/SideBarRight'
import Home_Footer from '../template/Footer'

import Contents from './components/Contents'

import background_img from '../../../images/background/background.jpg'

const Home = () => {
  return (
    <Background>
      <Backgroundgradient>
        <Home_Header></Home_Header>
        <Calendar_Content_Containers>
          <Home_SideBar_Left></Home_SideBar_Left>
          <Contents />
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
