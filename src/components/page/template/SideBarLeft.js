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
    </>
));

// <------------ css ------------> //

const Puzzle_SideBar_Containers_left = styled.div`
    display: flex;
    width: 300px;
    height:calc(100vh - 280px);
    float:left;
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