import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import EditorComment from './EditorComment'
import { HandIndexThumb } from 'styled-icons/bootstrap';

const PuzzleComment = ({ comment, setCommentData }) => {

    const accessToken = sessionStorage.getItem("accessToken");
    
    const [userinfo, setUserinfo] = useState('');
    const [description, setDescription] = useState('');
    const [desc,setDesc] = useState('');
    const [commentKey, setCommentKey] = useState('');
    let commentValue = [];
    let commentData = [];
    let puzzleId = ''

    const onEditorChange = (value) => {
        setDescription(value)
    }

    const onEditorCommentChange = (value) => {
        setDesc(value)
    }

    const onEditorCommentCancel = () => {
        setCommentKey(''),
        setDesc('')
    }

    const onEditorCommentChagnebtn = (index,desc) => {
        setCommentKey(String(index)),
        setDesc(''),
        setDesc(desc)
    }
    //post 보낼 때 퍼즐 아이디 만들기


    //Comment 데이터 재 가공
    const PostCommentCreate = () => {
        axios
            .post('https://api.teampuzzle.ga:4000/comment/create', {
                puzzleId,
                description
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(res => {
                setDescription('')
                setCommentData(prev => !prev)
            })
    }

    const PostCommentUpdate = () => {
        axios
            .post(`https://api.teampuzzle.ga:4000/comment/update/${commentKey}`,{
                desc
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(res => {
                setDesc('')
                setCommentKey('')
                setCommentData(prev => !prev)
            })
    }

    const PostCommentDelete = (commentID) => {
        axios
            .delete(`https://api.teampuzzle.ga:4000/comment/delete/${commentID}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(res => {
                setCommentData(prev => !prev);
            })
    }

    useEffect(() => {
        axios
            .get('https://api.teampuzzle.ga:4000/user/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(res => {
                const { data } = res.data
                setUserinfo(data)
            })
    }, [])

    comment.map(i => {
        commentData[i.id] = i;
    })

    commentData.forEach((data, i) => {
        puzzleId = commentData[i].puzzleId;
        let descriptionData = [];
        descriptionData[i] = commentData[i].description;
        commentValue[commentData[i].id] =
            <Puzzle_Comment_InSide_Containers key={commentData[i].id}>
                <Puzzle_Comment_Header_Containers>
                    <Puzzle_Comment_Name>{commentData[i]['user.name']}</Puzzle_Comment_Name>
                    <Puzzle_Comment_CreatedAt>{commentData[i].updatedAt.substring(0, 19).replace('T', ' ')}</Puzzle_Comment_CreatedAt>
                    <Puzzle_Comment_Edit_btn onClick={() => {onEditorCommentChagnebtn(commentData[i].id,commentData[i].description)}}>수정</Puzzle_Comment_Edit_btn>
                    <Puzzle_Comment_Delete_btn onClick={() => PostCommentDelete(commentData[i].id)}>삭제</Puzzle_Comment_Delete_btn>
                </Puzzle_Comment_Header_Containers>
                <Puzzle_Comment_Output_Containers>
                    <Puzzle_Comment_Output_Text dangerouslySetInnerHTML={{ __html: descriptionData[i] }}></Puzzle_Comment_Output_Text>
                </Puzzle_Comment_Output_Containers>
            </Puzzle_Comment_InSide_Containers>
    })

    commentValue.filter(e => {
        if (e.key === commentKey) {
            commentValue[commentData[commentKey].id] = 
                <Puzzle_Comment_InSide_Containers key={'fix'}>
                    <Puzzle_Comment_Header_Containers>
                        <Puzzle_Comment_Name>{commentData[commentKey]['user.name']}</Puzzle_Comment_Name>
                        <Puzzle_Comment_CreatedAt>{commentData[commentKey].updatedAt.substring(0, 19).replace('T', ' ')}</Puzzle_Comment_CreatedAt>
                        <Puzzle_Comment_Cancel_btn onClick={onEditorCommentCancel}>수정 취소</Puzzle_Comment_Cancel_btn>
                        <Puzzle_Comment_Update_btn onClick={PostCommentUpdate}>수정 완료</Puzzle_Comment_Update_btn>
                    </Puzzle_Comment_Header_Containers>
                    <Puzzle_Comment_Output_Containers>
                        <EditorComment_Containers>
                            <EditorComment value={desc} onChange={onEditorCommentChange} ></EditorComment>
                        </EditorComment_Containers>
                    </Puzzle_Comment_Output_Containers>
                </Puzzle_Comment_InSide_Containers>
        }
    })

    return (
        <Puzzle_Comment_Containers>
            <Puzzle_Comment_InSide_Containers>
            <Puzzle_Comment_Header_Containers>
                <Puzzle_Comment_Name>{userinfo.name}</Puzzle_Comment_Name>
                <Puzzle_Comment_Create_btn onClick={PostCommentCreate}>게시</Puzzle_Comment_Create_btn>
            </Puzzle_Comment_Header_Containers>
            <EditorComment_Containers>
                <EditorComment value={description} onChange={onEditorChange} ></EditorComment>
            </EditorComment_Containers>
            {commentValue}
            </Puzzle_Comment_InSide_Containers>
        </Puzzle_Comment_Containers>
    )
}

export default PuzzleComment;

// <------------ css ------------> //

const Puzzle_Comment_Containers = styled.div`
    width: 100%;
    height: 485px;
    overflow: auto;
`

const Puzzle_Comment_InSide_Containers = styled.div`
    width: 99%;
`
const Puzzle_Comment_Header_Containers = styled.div`
    background-color:#1C7690;
    width: 100%;
    height: 30px;
    border-radius: 6px 6px 0px 0px;
    display:flex;
    align-items: center;
    border:solid 1px gray;
    margin-top: 10px;
`

const Puzzle_Comment_CreatedAt = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;
    color:white;
    margin-left: 10px;
`

const Puzzle_Comment_Name = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color:white;
    margin-left: 10px;
`

const Puzzle_Comment_Create_btn = styled.button`
    display: inline-block;
    margin-left:auto;
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
    margin-right: 5px;


    &:hover {
        color: #111;
    }
`

const Puzzle_Comment_Edit_btn = styled.button`
    display: inline-block;
    margin-left:auto;
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
`

const Puzzle_Comment_Cancel_btn = styled.button`
    display: inline-block;
    margin-left:auto;
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
    margin-right: 5px;


    &:hover {
        color: #111;
    }
`

const Puzzle_Comment_Delete_btn = styled.button`
    display: inline-block;
    margin-left:5px;
    margin-right:5px;
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
`

const Puzzle_Comment_Update_btn = styled.button`
    display: inline-block;
    margin-left:5px;
    margin-right:5px;
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
`

const Puzzle_Comment_Output_Containers = styled.div`
    display: inline-block;
    width: 100%;
    border:solid 1px gray;
    border-radius: 0px 0px 5px 5px;
`

const Puzzle_Comment_Output_Text = styled.div`
    margin: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    color:white;
`

const EditorComment_Containers = styled.div`
    width:100%;
    height: 120px;
`