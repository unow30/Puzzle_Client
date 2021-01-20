import React from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import Puzzle_logo from '../../../images/logo/Puzzle_Logo_Circle.png'
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle'

const Puzzle_Header_Containers = styled.div`
    display: flex;
    top: 0px;
    width: 100%;
    height: 200px;
`

const Puzzle_Header_Logo = styled.div`
    background-image: url('${Puzzle_logo}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    margin: 70px 0px 0px 100px
`

const Puzzle_Header_title = styled.div`
    display: block;
    margin: 70px auto;
    font-family: 'Roboto';
    font-style:normal;
    font-weight:700;
    font-size: 3.5em;
    text-decoration:underline;
    text-decoration-color: #FA991D;
    text-underline-position: under;
    color:white;
`

const Puzzle_Header_Userinfo = styled(UserCircle)`
    width: 80px;
    height: 80px;
    margin: 65px 100px 0px 0px;
    color:white;
`

export default withRouter(({ location: { pathname } }) => (
    <>
        <Puzzle_Header_Containers>
            <Puzzle_Header_Logo></Puzzle_Header_Logo>
            <Puzzle_Header_title>{pathname.replace('/', '').toUpperCase()}</Puzzle_Header_title>
            <Puzzle_Header_Userinfo></Puzzle_Header_Userinfo>
        </Puzzle_Header_Containers>
    </>
));