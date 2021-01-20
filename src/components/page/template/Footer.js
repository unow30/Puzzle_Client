import React from 'react';
import styled from 'styled-components';

const Puzzle_Footer_Containers = styled.div`
    display: flex;
    position: relative;
    bottom:0px;
    width:100%; 
    height:80px;
`
const Puzzle_Footer_Containers_Title_left = styled.div`
    display: flex;
    position: relative;
    bottom:0px;
    width:50%; 
    height:80px;
    justify-content: flex-start;
    align-items: center;
    float:left;
`

const Puzzle_Footer_Containers_Title_right = styled.div`
    display: flex;
    position: relative;
    bottom:0px;
    width:50%; 
    height:80px;
    justify-content: flex-end;
    align-items: center;
    float: right;
`

const Puzzle_Footer_Title = styled.div`
    font-family: 'Roboto';
    font-style:normal;
    font-weight:700;
    color:white;
    font-size: 2em;
    text-decoration: underline;
    text-decoration-color: #21A598;
    text-underline-position: under;
    margin: 0 3em 0 2em;
`
const Puzzle_Footer = () => {
    return (
        <>
            <Puzzle_Footer_Containers>
                <Puzzle_Footer_Containers_Title_left>
                    <Puzzle_Footer_Title>ABO</Puzzle_Footer_Title>
                </Puzzle_Footer_Containers_Title_left>
                <Puzzle_Footer_Containers_Title_right>
                    <Puzzle_Footer_Title>HELP</Puzzle_Footer_Title>
                </Puzzle_Footer_Containers_Title_right>
            </Puzzle_Footer_Containers>
        </>
    )
}

export default Puzzle_Footer;