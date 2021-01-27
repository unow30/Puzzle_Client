import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Puzzle_Header from '../template/Header'
import Puzzle_SideBar_Left from '../template/SideBarLeft'
import Puzzle_SideBar_Right from '../template/SideBarRight'
import Puzzle_Footer from '../template/Footer'

import PuzzleHeader from './components/PuzzleHeader'
import PuzzleContent from './components/PuzzleContent'

import background_img from '../../../images/background/background.jpg'

const Puzzle = () => {
    return (
        <Background>
            <Backgroundgradient>
                <Puzzle_Header></Puzzle_Header>
                <Puzzle_Content_Containers>
                    <Puzzle_SideBar_Left></Puzzle_SideBar_Left>
                    <Puzzle_Content_Inside_Containers>
                        <PuzzleHeader></PuzzleHeader>
                        <PuzzleContent></PuzzleContent>
                    </Puzzle_Content_Inside_Containers>
                    <Puzzle_SideBar_Right></Puzzle_SideBar_Right>
                </Puzzle_Content_Containers>
                <Puzzle_Footer></Puzzle_Footer>
            </Backgroundgradient>
        </Background>
    )
}

export default Puzzle;

// <------------ css ------------> //
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

const Puzzle_Content_Containers = styled.div`
    width: 100%;
    height: calc(100vh - 280px);
    display: flex;
`

const Puzzle_Content_Inside_Containers = styled.div`
    background-color: #052439;
    width: calc(100vw - 500px);
    height: 100%;
    border-radius: 30px;
`