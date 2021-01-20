import React from 'react';
import styled from 'styled-components';
import Home_Header from '../template/Header'
import Home_SideBar from '../template/SideBar'
import Home_Footer from '../template/Footer'

import background_img from '../../../images/background/background.jpg'



const Background = styled.div`
    background-image: url('${background_img}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100wh;
    background-attachment: scroll;

    @media ${(props) => props.theme.mobile}{
    background-color:red;
    width:500px;
    height:500px;
    }
`
const Backgroundgradient = styled.div`
    background-repeat: no-repeat;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    background-size: cover;
    height: 100vh;
    width: 100wh;
`
const Home = () => {
    return (
        <Background>
            <Backgroundgradient>
            <Home_Header></Home_Header>
            <Home_SideBar></Home_SideBar>
            <Home_Footer></Home_Footer>
            </Backgroundgradient>
        </Background>
    )
}

export default Home;