import React from 'react';
import styled from 'styled-components'

import img from '../../../../images/icon/img.jpg'

const PuzzleContent = () => {
    return (
        <Puzzle_Content_Puzzle_Title_Containers>
            <PuzzleImg></PuzzleImg>
            <Puzzle_Content_Setting_Containers>
                <Puzzle_Content_Writer_Containers>
                    <Puzzle_Content_writer>작성자</Puzzle_Content_writer>
                    <Puzzle_Content_Writer_Img_Containers>
                    <Puzzle_Content_Writer_Img src={img}></Puzzle_Content_Writer_Img>
                    <Puzzle_Content_Name>닉네임</Puzzle_Content_Name>
                    </Puzzle_Content_Writer_Img_Containers>

                    <Puzzle_Content_Writer_Img_Containers>
                    <Puzzle_Content_Writer_Img src={img}></Puzzle_Content_Writer_Img>
                    <Puzzle_Content_Name>닉네임</Puzzle_Content_Name>
                    </Puzzle_Content_Writer_Img_Containers>

                    <Puzzle_Content_Writer_Img_Containers>
                    <Puzzle_Content_Writer_Img src={img}></Puzzle_Content_Writer_Img>
                    <Puzzle_Content_Name>닉네임</Puzzle_Content_Name>
                    </Puzzle_Content_Writer_Img_Containers>

                    <Puzzle_Content_Writer_Img_Containers>
                    <Puzzle_Content_Writer_Img src={img}></Puzzle_Content_Writer_Img>
                    <Puzzle_Content_Name>닉네임</Puzzle_Content_Name>
                    </Puzzle_Content_Writer_Img_Containers>
                    
                </Puzzle_Content_Writer_Containers>
                <Puzzle_Content_title_Containers>
                        <Puzzle_Content_title>업무 내용</Puzzle_Content_title>
                    </Puzzle_Content_title_Containers>
                <Puzzle_Content_Input type='text'></Puzzle_Content_Input>
            </Puzzle_Content_Setting_Containers>
        </Puzzle_Content_Puzzle_Title_Containers>
    )
}

export default PuzzleContent;

// <------------ css ------------> //

const Puzzle_Content_Puzzle_Title_Containers = styled.div`
    width: 100%;
    height: 950px;
    display:flex;
`

const PuzzleImg = styled.div`
    background-color: blue;
    width: 700px;
    height: 700px;
`

const Puzzle_Content_Setting_Containers = styled.div`
    width: 100%;
    height: 950px;
`

const Puzzle_Content_Writer_Containers = styled.div`
    width:100%;
    height:100px;
    display:flex;
    align-items: center;
`

const Puzzle_Content_Writer_Img_Containers = styled.div`
    width:50px;
    height:50px;
    margin-left: 20px;
`

const Puzzle_Content_Writer_Img = styled.img`
    display:block;
    width:32px;
    height:32px;
    border-radius: 100%;
    margin: 0 auto;
`

const Puzzle_Content_Name = styled.div`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
`

const Puzzle_Content_title_Containers = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items: center;
`

const Puzzle_Content_title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    color:white;
`

const Puzzle_Content_writer = styled.div`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
`

const Puzzle_Content_Input = styled.input`
    width:100%;
    height:300px;
`