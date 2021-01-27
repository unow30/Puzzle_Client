import React from 'react'
import styled from 'styled-components'

const PasswrodChangeFail = ({ showPasswrodChangeFail, setShowPasswrodChangeFail}) => {

    const closeModal = () => {
        setShowPasswrodChangeFail(prev => !prev)
    }

    return (
        <>
            {showPasswrodChangeFail ? (
                <Background>
                    <ModalWrapper showPasswrodChangeFail={showPasswrodChangeFail}>
                        <Password_Fail_Header_Containers>
                            <Password_Fail_Header_Title>알림</Password_Fail_Header_Title>
                        </Password_Fail_Header_Containers>
                        <Password_Fail_Content_Containers>
                            <Password_Fail_Text>현재 비밀번호를 다시 확인해주시기 바랍니다.</Password_Fail_Text>
                        </Password_Fail_Content_Containers>
                        <Password_Fail_btn_Containers>
                            <Password_Fail_btn onClick={closeModal}> 확인 </Password_Fail_btn>
                        </Password_Fail_btn_Containers>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
}

export default PasswrodChangeFail;

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
    height: 120px;
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

const Password_Fail_Header_Containers = styled.div`
  display: flex;
  width:100%;
  height:40px;
  justify-content: center;
  align-items: center;
`

const Password_Fail_Header_Title = styled.div`
  margin-left: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
`

const Password_Fail_Content_Containers = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
`

const Password_Fail_Text = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 0.9em;
`

const Password_Fail_btn_Containers = styled.div`
    width: 100%;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Password_Fail_btn = styled.button`
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