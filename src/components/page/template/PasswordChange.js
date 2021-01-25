import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'

import { Close } from '@styled-icons/evaicons-solid/Close'

import PasswrodChangeSuccess from './PasswrodChangeSuccess'

const PasswordChange = ({ showPasswrodChange, setShowPasswrodChange }) => {
    const modalRef = useRef()

    const [showPasswrodChangeSuccess, setShowPasswrodChangeSuccess] = useState(false);

    const openPasswrodChangeSuccess = () => {
        setShowPasswrodChangeSuccess(perv => !perv)
    }

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowPasswrodChange(false)
        }
    }

    // const keyPress = useCallback(
    //     e => {
    //         if (e.key === 'Escape' && showPasswrodChange) {
    //             setShowPasswrodChange(false)
    //         }
    //     },
    //     [setShowPasswrodChange, showPasswrodChange]
    // )

    // useEffect(() => {
    //     document.addEventListener('keydown', keyPress)
    //     return () => document.removeEventListener('keydown', keyPress)
    // }, [keyPress])

    const onSubmit = async e => {
        e.preventDefault()
    } //새로고침 방지

    return (
        <>
            {showPasswrodChange ? (
                <>
                    <Background onClick={closeModal} ref={modalRef}>
                        <ModalWrapper showPasswrodChange={showPasswrodChange}>
                            <Password_Header_Containers>
                                <Password_Header_Title>비밀번호 변경</Password_Header_Title>
                                <CloseModalButton
                                    onClick={() => setShowPasswrodChange(prev => !prev)}
                                ></CloseModalButton>
                            </Password_Header_Containers>
                            <Password_Change_Containers>
                                <form onSubmit={onSubmit}>
                                    <Password_Change_Inside_Containers>
                                        <Password_Context_Text >현재 비밀번호</Password_Context_Text>
                                        <Password_Input placeholder=" 현재 비밀번호을 입력해주세요."></Password_Input>
                                        <Password_Context_Text >변경 할 비밀번호</Password_Context_Text>
                                        <Password_Input placeholder=" 변경 할 비밀번호을 입력해주세요."></Password_Input>
                                        <Password_Context_Text >변경 할 비밀번호 확인</Password_Context_Text>
                                        <Password_Input placeholder=" 변경 할 비밀번호을 한 번 더 입력해주세요."></Password_Input>
                                    </Password_Change_Inside_Containers>
                                </form>
                            </Password_Change_Containers>
                            <Passwrod_Change_btn_Containers>
                                <Passwrod_Change_btn onClick={() => setShowPasswrodChange(prev => !prev), openPasswrodChangeSuccess} >변경하기</Passwrod_Change_btn>
                            </Passwrod_Change_btn_Containers>
                        </ModalWrapper>
                    </Background>
                    <PasswrodChangeSuccess
                        showPasswrodChangeSuccess={showPasswrodChangeSuccess}
                        setShowPasswrodChangeSuccess={setShowPasswrodChangeSuccess}
                        setShowPasswrodChange={setShowPasswrodChange}
                    ></PasswrodChangeSuccess>
                </>
            ) : null}
        </>
    )
}

export default PasswordChange;

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
    width: 600px;
    height: 400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #0F3046;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const Password_Header_Containers = styled.div`
  display: flex;
  width:100%;
  height:60px;
  justify-content: center;
  align-items: center;
`

const Password_Header_Title = styled.div`
  margin-left: 220px;
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
  margin: 0 0 0 180px;
  &:hover{ color: #FA991D};
`
const Password_Change_Containers = styled.div`
    display:flex;
    width:100%;
    height:280px;
    justify-content: center;
`

const Password_Change_Inside_Containers = styled.div`
    display:flex;
    flex-direction:column;
    width: 300px;
    height: 100%;
    justify-content: center;
`

const Password_Context_Text = styled.strong`
    margin-bottom: 15px;
    margin-left: 5px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
`

const Password_Input = styled.input.attrs({
    type: "password"
})`
    width:300px;
    height:20px;
    margin-bottom: 30px;
    outline: none;
    border:none;
    border-bottom: 2px solid #FA991D;
    background-color: transparent;
    color: white;

    &::placeholder {
        color: #ddd;
      }
`

const Passwrod_Change_btn_Containers = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
`

const Passwrod_Change_btn = styled.button`
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