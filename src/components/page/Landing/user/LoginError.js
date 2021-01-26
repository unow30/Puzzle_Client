import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'

// import { Close } from '@styled-icons/evaicons-solid/Close'

const LoginErrorModal= ({ showLoginErrorModal, setShowLoginErrorModal }) => {
    const modalRef = useRef()

    // const closeModal = e => {
    //     if (modalRef.current === e.target) {
    //         setShowPasswrodChange(false)
    //     }
    // }

    const closeModal = () => {
        setShowLoginErrorModal(prev => !prev);
    }

    return (
        <>
            {showLoginErrorModal ? (
                <Background>
                    <ModalWrapper showLoginErrorModal={showLoginErrorModal}>
                        <Login_Error_Header_Containers>
                            <Login_Error_Header_Title>알림</Login_Error_Header_Title>
                        </Login_Error_Header_Containers>
                        <Login_Error_Content_Containers>
                            <Login_Error_Text>계정이 존재 하지 않습니다.</Login_Error_Text>
                            <Login_Error_Text>이메일과 비밀번호를 다시 확인해주세요.</Login_Error_Text>
                        </Login_Error_Content_Containers>
                        <Login_Error_btn_Containers>
                            <Login_Error_btn onClick={closeModal}> 확인 </Login_Error_btn>
                        </Login_Error_btn_Containers>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
}

export default LoginErrorModal;

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
    width: 300px;
    height: 150px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: white;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

// const CloseModalButton = styled(Close)`
//   cursor: pointer;
//   width: 32px;
//   height: 32px;
//   z-index: 10;
//   color:black;
//   margin: 0 0 0 90px;
//   &:hover{ color: #FA991D};
// `

const Login_Error_Header_Containers = styled.div`
  display: flex;
  width:100%;
  height:40px;
  justify-content: center;
  align-items: center;
`

const Login_Error_Header_Title = styled.div`
  margin-left: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
`

const Login_Error_Content_Containers = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Login_Error_Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    margin-top: 5px;
`

const Login_Error_btn_Containers = styled.div`
    width: 100%;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Login_Error_btn = styled.button`
    width: 150px;
    height: 30px;
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