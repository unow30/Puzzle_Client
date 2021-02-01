import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Puzzle_Header from '../template/Header'
import Puzzle_SideBar_Left from '../template/SideBarLeft'
import Puzzle_SideBar_Right from '../template/SideBarRight'
import Puzzle_Footer from '../template/Footer'

import PuzzleHeader from './components/PuzzleHeader'
import PuzzleContent from './components/PuzzleContent'

import background_img from '../../../images/background/background.jpg'

const Puzzle = () => {

    const [loading, setloading] = useState(true);
    const [puzzle, setpuzzle] = useState({});
    const [comment,setComment] = useState({});
    const [titleData, setTitleData] = useState(true);
    const [contentData, setContentData] = useState(true);
    const [commentData, setCommentData] = useState(true);

    const accessToken = sessionStorage.getItem("accessToken");

    useEffect(() => {
        axios
            .get('https://api.teampuzzle.ga:4000/puzzle/read/1', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                let { puzzle } = res.data;
                let { comment} = res.data;
                setpuzzle(puzzle);
                setComment(comment);
                setloading(false);
            })
            .catch(err => {
            })
    }, [titleData,contentData,commentData])

    return (
        <>
            <Background>
                <Backgroundgradient>
                    <Puzzle_Header></Puzzle_Header>
                    <Puzzle_Content_Containers>
                        <Puzzle_SideBar_Left></Puzzle_SideBar_Left>
                        <Puzzle_Content_Inside_Containers>
                            {loading ? (
                                <Loading>
                                    <Loading_Text>진행중인 프로젝트가 없습니다.</Loading_Text>
                                </Loading>
                            ) : (
                                    <>
                                        <PuzzleHeader puzzleData={puzzle} setTitleData={setTitleData}></PuzzleHeader>
                                        <PuzzleContent puzzleData={puzzle} comment = {comment} setCommentData = {setCommentData} setContentData={setContentData}></PuzzleContent>
                                    </>
                                )}
                        </Puzzle_Content_Inside_Containers>
                        <Puzzle_SideBar_Right></Puzzle_SideBar_Right>
                    </Puzzle_Content_Containers>
                    <Puzzle_Footer></Puzzle_Footer>
                </Backgroundgradient>
            </Background>
        </>
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

const Loading = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Loading_Text =styled.div`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 5em;
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