import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import { Close } from '@styled-icons/evaicons-solid/Close'
import { Camera } from '@styled-icons/fa-solid/Camera'

import profileImage from '../../../images/icon/img.jpg'

import PasswrodChange from './PasswordChange'

const Userinfo = ({ data, showUserinfoModal, setShowUserinfoModal }) => {

  const ContentEmail = data.email
  const ContentNickName = data.name
  const ContentPhone = data.phone
  const ContentUserCode = data.usercode
  const ContentProfileImg = data.profileImg

  const accessToken = sessionStorage.getItem("accessToken");

  const [profileimgsrc, setprofileimgsrc] = useState(ContentProfileImg)
  const [showPasswrodChange, setShowPasswrodChange] = useState(false);
  const [ContentEditNicknamebtn, setContentEditNicknamebtn] = useState(false);
  const [ContentEditPhonebtn, setContentEditPhonebtn] = useState(false);
  const [nickname, setnickname] = useState('');
  const [phone, setphone] = useState('');

  const modalRef = useRef()

  const onChange = e => {
    const {
      target: { nickname, phone },
    } = e
    if (nickname === 'nickname') {
      setnickname(value)
    }
    if (phone === 'password') {
      setphone(value)
    }
  }

  const openPasswrodChange = () => {
    setShowPasswrodChange(perv => !perv)
  }

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowUserinfoModal(false)
    }
  }

  const postprofileimg = e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    axios.post('https://api.teampuzzle.ga:4000/user/profile', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setprofileimgsrc(res.data.url)
    })
  }

  const postModifyUserinfo = e => {
    axios
      .post('https://api.teampuzzle.ga:4000/user/mypage', {
        nickname,
        phone
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
  }

  const onSubmit = async e => {
    e.preventDefault()
  } //새로고침 방지

  return (
    <>
      {showUserinfoModal ? (
        <>
          <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showUserinfoModal={showUserinfoModal}>
              <Profile_Header_Containers>
                <Profile_Header_Title>계정 정보</Profile_Header_Title>
                <CloseModalButton
                  onClick={() => setShowUserinfoModal(prev => !prev)}
                />
              </Profile_Header_Containers>
              <Profile_Img_Containers>
                <Profile_Img src={profileimgsrc === undefined ? ContentProfileImg : profileimgsrc} alt='profileImg'>
                </Profile_Img>
                <Profile_Img_Select_Containers>
                  <label htmlFor="Profile_Img_Select">
                    <Profile_Img_Select></Profile_Img_Select>
                  </label>
                  <Profile_Img_Uploader type="file" name="image" id="Profile_Img_Select" onChange={postprofileimg} accept="image/jpg,impge/png,image/jpeg,image/gif"></Profile_Img_Uploader>
                </Profile_Img_Select_Containers>
              </Profile_Img_Containers>
              <Profile_Content_Containers>
                <form onSubmit={onSubmit}>
                  <Profile_Content_Inside_Containers>
                    <Profile_Content_Text_Containers>
                      <Profile_Content_Text>이메일</Profile_Content_Text>
                    </Profile_Content_Text_Containers>
                    <Profile_Content_Change_Containers>
                      <Profile_Content_Value>{ContentEmail}</Profile_Content_Value>
                    </Profile_Content_Change_Containers>

                    <Profile_Content_Text_Containers>
                      <Profile_Content_Text>닉네임</Profile_Content_Text>
                      <Profile_Content_Text_Edit onClick={() => setContentEditNicknamebtn(prev => !prev)}>{ContentEditNicknamebtn ? "취소" : "수정"}</Profile_Content_Text_Edit>
                    </Profile_Content_Text_Containers>
                    <Profile_Content_Change_Containers>
                      <Profile_Content_Change ContentEditbtn={ContentEditNicknamebtn} placeholder={ContentNickName} onChange={onChange} name='nickname'></Profile_Content_Change>
                      <Profile_Content_Change_btn ContentEditbtn={ContentEditNicknamebtn} onClick={postModifyUserinfo}>저장</Profile_Content_Change_btn>
                      <Profile_Content_Value ContentEditbtn={ContentEditNicknamebtn}>{ContentNickName}</Profile_Content_Value>
                    </Profile_Content_Change_Containers>

                    <Profile_Content_Text_Containers>
                      <Profile_Content_Text>휴대전화 번호</Profile_Content_Text>
                      <Profile_Content_Text_Edit onClick={() => setContentEditPhonebtn(prev => !prev)}>{ContentEditPhonebtn ? "취소" : "수정"}</Profile_Content_Text_Edit>
                    </Profile_Content_Text_Containers>
                    <Profile_Content_Change_Containers>
                      <Profile_Content_Change ContentEditbtn={ContentEditPhonebtn} placeholder={ContentPhone} onChange={onChange} name='phone'></Profile_Content_Change>
                      <Profile_Content_Change_btn ContentEditbtn={ContentEditPhonebtn} onClick={postModifyUserinfo}>저장</Profile_Content_Change_btn>
                      <Profile_Content_Value ContentEditbtn={ContentEditPhonebtn}>{ContentPhone}</Profile_Content_Value>
                    </Profile_Content_Change_Containers>

                    <Profile_Content_Text_Containers>
                      <Profile_Content_Text>유저 코드</Profile_Content_Text>
                    </Profile_Content_Text_Containers>
                    <Profile_Content_Change_Containers>
                      <Profile_Content_Value>{ContentUserCode}</Profile_Content_Value>
                    </Profile_Content_Change_Containers>

                    <Profile_Content_Text_Containers>
                      <Profile_Content_Text>비밀번호</Profile_Content_Text>
                    </Profile_Content_Text_Containers>
                    <Profile_Password_Change onClick={openPasswrodChange}>비밀번호 변경</Profile_Password_Change>
                  </Profile_Content_Inside_Containers>
                </form>
              </Profile_Content_Containers>
              {/* <Profile_submit_Containers>
                <Profile_submit_Inside_Containers>
                  <Profile_submit onClick={() => setShowUserinfoModal(prev => !prev)} > 계정 정보 저장하기 </Profile_submit>
                </Profile_submit_Inside_Containers>
              </Profile_submit_Containers> */}
            </ModalWrapper>
          </Background>
          <PasswrodChange
            showPasswrodChange={showPasswrodChange}
            setShowPasswrodChange={setShowPasswrodChange}
          />
        </>
      ) : null}
    </>
  )
}

export default Userinfo;

// <------------ css ------------> //
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`


const ModalWrapper = styled.div`
  width: 500px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #052439;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const Profile_Header_Containers = styled.div`
  display: flex;
  width:100%;
  height:60px;
  justify-content: center;
  align-items: center;
`

const Profile_Header_Title = styled.div`
  margin-left: 185px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
  color: white;
`

const CloseModalButton = styled(Close)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  z-index: 10;
  color:white;
  margin: 0 0 0 150px;
  &:hover{ color: #FA991D};
`

const Profile_Img_Containers = styled.div`
  position: relative;
  display: flex;
  width:100%;
  height:100px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

const Profile_Img = styled.img`
  display:felx;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const Profile_Img_Select_Containers = styled.div`
  position: absolute;
  display:felx;
  height: 34px;
  width: 34px;
  bottom: 0px;
  margin-left: 60px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const Profile_Img_Select = styled(Camera)`
  height: 24px;
  width: 24px;
  color:gray;
  cursor: pointer;
  &:hover{ color: #FA991D};
`

const Profile_Img_Uploader = styled.input`
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
`

const Profile_Content_Containers = styled.div`
  display: flex;
  width:100%;
  height: 450px;
  margin-top: 50px;
  justify-content: center;
`

const Profile_Content_Inside_Containers = styled.div`
  display:flex;
  flex-direction:column;
  width: 300px;
  height: 100%;
`
const Profile_Content_Text_Containers = styled.div`
  width:100%;
  height: 25px;
`

const Profile_Content_Text_Edit = styled.span`
  color:white;
  margin-left: 2px;
  cursor: pointer;
`

const Profile_Content_Text = styled.strong`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 12px;
  color:white;
`

const Profile_Content_Value = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color:white;
  display: ${props => props.ContentEditbtn ? 'none' : 'block'};
`

const Profile_Content_Change_Containers = styled.div`
  width:100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Profile_Content_Change = styled.input`
  width: 240px;
  height: 20px;
  outline: none;
  border:none;
  border-bottom: 2px solid #FA991D;
  background-color: transparent;
  color: white;
  display: ${props => props.ContentEditbtn ? 'block' : 'none'};

  &::placeholder {
      color: #ddd;
    }
`
const Profile_Content_Change_btn = styled.button`
  float: right;
  display: ${props => props.ContentEditbtn ? 'block' : 'none'};
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  color: #111;
  outline: none;
  background-color:#FA991D;
  
  &:hover {
      color: white;
  }
`

const Profile_Password_Change = styled.button`
width: 100%;
height: 25px;
cursor: pointer;
border-radius: 5px;
border: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 1em;
color: #111;
outline: none;
background-color:#FA991D;

&:hover {
    color: white;
}
`

const Profile_submit_Containers = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
`

const Profile_submit_Inside_Containers = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Profile_submit = styled.button`
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #111;
  outline: none;
  background-color:#FA991D;

  &:hover {
      color: white;
  }
`