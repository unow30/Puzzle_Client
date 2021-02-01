import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const PuzzleLabale = ({puzzleData}) => {
    
    let [searchValue,setSearchValue] = useState('');
    let puzzleDataValue = []
    let LabelData = [];

    const onLabelSearch = (e) => {
        setSearchValue(e.target.value)
    }

    puzzleData.labels.map(i => {
        LabelData[i.id] = i;
    })

    const filterLabels = LabelData.filter(label => {
        return label.name.toLowerCase().includes(searchValue);
    })

    filterLabels.forEach((data, i) => {
        puzzleDataValue[i] = 
        <Puzzle_Label_Render key = {i} style ={{backgroundColor:`${filterLabels[i].color}`}}>{filterLabels[i].name} <br></br> {filterLabels[i].description}</Puzzle_Label_Render>
        
    })

    return(
        <Puzzle_Label_Containers>
            <Puzzle_Label_Title>Labels 리스트</Puzzle_Label_Title>
            <Puzzle_Label_Search_Containers>
            <Puzzle_Label_Search onChange={onLabelSearch} placeholder={'제목을 입력해주세요.'}></Puzzle_Label_Search>
            </Puzzle_Label_Search_Containers>
            <Puzzle_Label_Render_Containers>
                {puzzleDataValue}
                {puzzleDataValue}
                {puzzleDataValue}
            </Puzzle_Label_Render_Containers>
            <Puzzle_Label_Title>현재 Labels </Puzzle_Label_Title>
        </Puzzle_Label_Containers>
    )
}

export default PuzzleLabale

// <------------ css ------------> //

const Puzzle_Label_Containers = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    margin-left:10px;
`

const Puzzle_Label_Title = styled.div`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 10px;
`
const Puzzle_Label_Search_Containers = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Puzzle_Label_Search = styled.input`
    background-color:white;
    width: 90%;
    height: 40px;
    border-radius: 12px;
    outline: none;
`

const Puzzle_Label_Render_Containers = styled.div`
    width:100%;
    height:200px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-bottom: 30px;
`

const Puzzle_Label_Render = styled.div`
    display: inline-block;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    padding:5px;
    border-radius: 10px;
    margin-left: 5px;
    margin-top: 5px;
`