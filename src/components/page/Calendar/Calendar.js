import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Calendar_Header from '../template/Header'
import Calendar_SideBar_Left from '../template/SideBarLeft'
import Calendar_Footer from '../template/Footer'
import Calendar_SideBar_Right from '../template/SideBarRight'

import Calendar_API from './components/CalendarAPI'

import background_img from '../../../images/background/background.jpg'

const Calendar = () => {
    return (
        <Background>
            <Backgroundgradient>
                <Calendar_Header></Calendar_Header>
                <Calendar_Content_Containers>
                    <Calendar_SideBar_Left></Calendar_SideBar_Left>
                    <Calendar_API></Calendar_API>
                    <Calendar_SideBar_Right></Calendar_SideBar_Right>
                </Calendar_Content_Containers>
                <Calendar_Footer></Calendar_Footer>
            </Backgroundgradient>
        </Background>
    )
}

export default Calendar;

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

const Calendar_Content_Containers = styled.div`
    width: 100%;
    height: calc(100vh - 280px);
    display: flex;
`