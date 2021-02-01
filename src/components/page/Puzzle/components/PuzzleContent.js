import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Editor from './EditorComponent'

import PuzzleLabel from './PuzzleLable'
import PuzzleComment from './PuzzleComment'

const PuzzleContent = ({ puzzleData, setContentData, comment, setCommentData }) => {

    const [Editors, setEditors] = useState(true);
    const [description, setDesc] = useState(puzzleData.description);

    const onEditorChange_btn = () => {
        setEditors(prev => !prev);
    }

    const onEditorChange = (value) => {
        setDesc(value)
    }

    const accessToken = sessionStorage.getItem("accessToken");
    const id = puzzleData.id;

    const postContentText = () => {
        axios
            .post(`https://api.teampuzzle.ga:4000/puzzle/update/${id}`, {
                id,
                description
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setEditors(prev => !prev);
                setContentData(prev => !prev);
            })

    }

    const dangerous = () => {
        return { __html: puzzleData.description };
    }
    return (
        <Puzzle_Content_Puzzle_Title_Containers>
            <PuzzleImg></PuzzleImg>
            <Puzzle_Content_Setting_Containers>
                <Puzzle_Content_Writer_Containers>
                    <Puzzle_Content_writer>작성자</Puzzle_Content_writer>
                    <Puzzle_Content_Writer_Img_Containers>
                        <Puzzle_Content_Writer_Img src={puzzleData.wirter.profileImg}></Puzzle_Content_Writer_Img>
                        <Puzzle_Content_Name>{puzzleData.wirter.name}</Puzzle_Content_Name>
                    </Puzzle_Content_Writer_Img_Containers>

                </Puzzle_Content_Writer_Containers>
                <Puzzle_Content_title_Containers>
                    <Puzzle_Content_title>업무 내용</Puzzle_Content_title>
                </Puzzle_Content_title_Containers>
                {Editors ? (
                    <>
                        <Puzzle_Content_Text_Containers>
                            <Puzzle_Content_Text_Inside_Containers>
                                <Puzzle_Content_Text dangerouslySetInnerHTML={dangerous()} ></Puzzle_Content_Text>
                            </Puzzle_Content_Text_Inside_Containers>
                            <Puzzle_Content_text_change_btn_Containers>
                                <Puzzle_Content_text_change_btn onClick={onEditorChange_btn}>수정하기</Puzzle_Content_text_change_btn>
                            </Puzzle_Content_text_change_btn_Containers>
                         </Puzzle_Content_Text_Containers>
                    </>
                ) : (
                        <>
                            <ReactQuills_Containers>
                                <Editor value={description} onChange={onEditorChange}></Editor>
                                <ReactQuills_btn_Containers>
                                    <ReactQuills_Cancel_btn onClick={onEditorChange_btn}>취소</ReactQuills_Cancel_btn>
                                    <ReactQuills_btn onClick={postContentText}>저장하기</ReactQuills_btn>
                                </ReactQuills_btn_Containers>
                            </ReactQuills_Containers>
                        </>
                    )}
                <PuzzleComment comment={comment} setCommentData= {setCommentData}></PuzzleComment>
            </Puzzle_Content_Setting_Containers>
            <PuzzleLabel puzzleData={puzzleData}></PuzzleLabel>
        </Puzzle_Content_Puzzle_Title_Containers>
    )
}

export default PuzzleContent;

// <------------ css ------------> //

const Puzzle_Content_Puzzle_Title_Containers = styled.div`
    width: 100%;
    height: 950px;
    display:flex;
    overflow: auto;
`
const Puzzle_Content_Setting_Containers = styled.div`
    width: 100%;
    height: 950px;
    flex: 3;
`

const ReactQuills_Containers = styled.div`
    height: 350px;
    width: 99%;
    border: solid 2px white;
    border-radius: 10px;
    padding: 5px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const PuzzleImg = styled.div`
    width: 700px;
    height: 700px;
    background-color: blue;
    flex: 1;
`

const ReactQuills_btn_Containers = styled.div`
    width:100%;
    height: 50px;
    display:flex;
    justify-content: flex-end;
`

const ReactQuills_btn = styled.button`
    width:100px;
    height:50px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    color: white;
    outline: none;
    background-color:#FA991D;

    &:hover {
        color: #111;
    }

    margin-left:5px;
`

const ReactQuills_Cancel_btn = styled(ReactQuills_btn)`
    background-color: #AFAFAF;
`

const Puzzle_Content_text_change_btn_Containers = styled.div`
    width:100%;
    height:60px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`

const Puzzle_Content_text_change_btn = styled.button`
    width:100px;
    height:50px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    color: white;
    outline: none;
    background-color:#FA991D;


    &:hover {
        color: #111;
    }
    float:right;
    margin: 5px 5px;
`

const Puzzle_Content_Text = styled.div`
    color:white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 10px;
`

const Puzzle_Content_Text_Inside_Containers = styled.div`
    height: 100%;
    width: 100%;
    border: solid 1px white;
`

const Puzzle_Content_Text_Containers = styled.div`
    width:99%;
    height:300px;
    border: solid 2px white;
    border-radius: 10px;
    padding: 5px;
    display:flex;
    flex-direction: column;
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