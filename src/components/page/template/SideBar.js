import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

export default withRouter(({ location: { pathname } }) => (
    <>
        <Puzzle_SideBar_Containers_left>
            <Puzzle_SideBar_category_ul>
                <Puzzle_SideBar_category_li>
                    <SLink current={pathname === "/home"} to={{pathname: "/home",state:{pathname: 'HOME'}}}> HOME </SLink>
                </Puzzle_SideBar_category_li>

                <Puzzle_SideBar_category_li>
                    <SLink current={pathname === "/project"} to="/project"> PROJECT </SLink>
                </Puzzle_SideBar_category_li>

                <Puzzle_SideBar_category_li>
                    <SLink current={pathname === "/puzzle"} to="/puzzle"> PUZZLE </SLink>
                </Puzzle_SideBar_category_li>

                <Puzzle_SideBar_category_li>
                    <SLink current={pathname === "/calendar"} to="/calendar"> CALENDAR </SLink>
                </Puzzle_SideBar_category_li>
            </Puzzle_SideBar_category_ul>
        </Puzzle_SideBar_Containers_left>
        <Puzzle_SideBar_Containers_right>
            <Puzzle_SideBar_Title_Bar_Top></Puzzle_SideBar_Title_Bar_Top>
            <Puzzle_SideBar_Containers_Title>
                <Puzzle_SideBar_Title>{pathname.replace('/', '').toUpperCase()}</Puzzle_SideBar_Title>
            </Puzzle_SideBar_Containers_Title>
            <Puzzle_SideBar_Title_Bar_Top_Bottom></Puzzle_SideBar_Title_Bar_Top_Bottom>
        </Puzzle_SideBar_Containers_right>
    </>
));

// <------------ css ------------> //

const Puzzle_SideBar_Containers_left = styled.div`
    display: flex;
    width: 50%;
    height:calc(100vh - 280px);
    float:left;
`

const Puzzle_SideBar_Containers_right = styled.div`
    display: flex;
    height:calc(100vh - 280px);
    float:right;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
`

const Puzzle_SideBar_Containers_Title = styled.div`
    display:flex;
    height: 15%;
    width: 50px;
    justify-content: center;
    align-items: center;
    margin: 0 7em;
`

const Puzzle_SideBar_Title = styled.div`
    font-style:normal;
    font-weight:700;
    color:white;
    font-size: 2em;
    transform: rotate(90deg);
`

const Puzzle_SideBar_Title_Bar_Top = styled.div`
    background-color: #FA991D;
    height: 30%;
    width: 10px;
    margin: 5em 8em;
`

const Puzzle_SideBar_Title_Bar_Top_Bottom = styled.div`
    background-color: #FA991D;
    height: 30%;
    width: 10px;
    margin: 5em 8em;
`

const Puzzle_SideBar_category_ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0 0 5em;
    height: 300px;
`

const Puzzle_SideBar_category_li = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color: white;
    font-size: 2em;
    text-decoration: underline;
    text-decoration-color: #21A598;
    text-underline-position: under;
    cursor: pointer;
`

const SLink = styled(Link)`
    color: white;
    &:visited{ color: white}
    text-decoration-color: ${props => props.current ? "#FA991D" : "#21A598"}
`