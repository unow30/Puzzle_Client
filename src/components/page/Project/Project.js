import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Project_Header from '../template/Header'
import Project_SideBar from '../template/SideBar'
import Project_Footer from '../template/Footer'

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
const Project = () => {
    return (
        <Background>
            <Backgroundgradient>
            <Project_Header></Project_Header>
            <Project_SideBar></Project_SideBar>
            <Project_Footer></Project_Footer>
            </Backgroundgradient>
        </Background>
    )
}

export default Project;