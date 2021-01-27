import React from 'react';
import styled from 'styled-components'

const PuzzleHeader = () => {
    return (
        <Puzzle_Title_Containers>
            <Puzzle_Title_Text>퍼즐3</Puzzle_Title_Text>
        </Puzzle_Title_Containers>
    )
}

export default PuzzleHeader;

// <------------ css ------------> //

const Puzzle_Title_Containers = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Puzzle_Title_Text = styled.span`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 5em;
`