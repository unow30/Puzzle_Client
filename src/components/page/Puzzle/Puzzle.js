import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Puzzle_Header from '../template/Header'
import Puzzle_SideBar from '../template/SideBar'
import Puzzle_Footer from '../template/Footer'

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
const Puzzle = () => {
    return (
        <Background>
            <Backgroundgradient>
            <Puzzle_Header></Puzzle_Header>
            <Puzzle_SideBar></Puzzle_SideBar>
            <Puzzle_Footer></Puzzle_Footer>
            </Backgroundgradient>
        </Background>
    )
}

export default Puzzle;