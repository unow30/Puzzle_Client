import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const PuzzleHeader = ({ puzzleData,setTitleData }) => {

    const [change_title,setchange_title] = useState(false);
    const [title, setTitle] = useState(puzzleData.title);

    const accessToken = sessionStorage.getItem("accessToken");
    const id = puzzleData.id;

    const onChange_title = () => {
        setchange_title(prev => !prev)
        setTitle(puzzleData.title)
    }

    const onChange_title_Value = (e) => {
        const {
            target: {name,value},
        } = e 
        if(name === 'title'){
            setTitle(value)
        }
    }


    const postContentText = () => {
        axios
            .post(`https://api.teampuzzle.ga:4000/puzzle/update/${id}`, {
                id,
                title
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setchange_title(prev => !prev);
                setTitleData(prev => !prev);
            })

    }

    return (
        <Puzzle_Title_Containers>
            {change_title ? (
                <>
                <Puzzle_Title_change_input name = 'title' value = {title} onChange = {onChange_title_Value}></Puzzle_Title_change_input>
                <Puzzle_Title_Cancel_btn onClick = {onChange_title}>취소</Puzzle_Title_Cancel_btn>
                <Puzzle_Title_Change_btn onClick = {postContentText}>저장</Puzzle_Title_Change_btn>
                </>
            ) : (
                <>
                <Puzzle_Title_Text>{puzzleData.title}</Puzzle_Title_Text>
                <Puzzle_Title_Change_btn onClick = {onChange_title}>수정</Puzzle_Title_Change_btn>
                </>
            )}
        </Puzzle_Title_Containers>
    )
}

export default PuzzleHeader;

// <------------ css ------------> //

const Puzzle_Title_Containers = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Puzzle_Title_Text = styled.span`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 4em;
    margin-left: 20px;
`

const Puzzle_Title_Cancel_btn = styled.button`
    width:50px;
    height:30px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    color: white;
    outline: none;
    background-color:#AFAFAF;

    &:hover {
        color: #111;
    }
`

const Puzzle_Title_Change_btn = styled(Puzzle_Title_Cancel_btn)`
    background-color:#FA991D;
`

const Puzzle_Title_change_input = styled.input`
    width:100%;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    outline: none;
    border:none;
    border-bottom: 2px solid #FA991D;
    background-color: transparent;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 4em;
  
    &::placeholder {
        color: #ddd;
      }
`