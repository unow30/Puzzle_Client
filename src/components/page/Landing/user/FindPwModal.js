import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import axios from 'axios'

import Logo_S from '../Img/Puzzle_Logo_ Square.png'

export const FindPwModal = ({ showPwModal, setShowPwModal }) => {
  const modalRef = useRef()
  const [find, setFind] = useState(false)

  const onFind = e => {
    setFind(prev => !prev)
    e.preventDefault()
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showPwModal ? 1 : 0,
    transform: showPwModal ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowPwModal(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showPwModal) {
        setShowPwModal(false)
      }
    },
    [setShowPwModal, showPwModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  const onSubmit = async e => {
    e.preventDefault()
  }

  return (
    <>
      {showPwModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showPwModal={showPwModal}>
              <EmailP>PW 찾기</EmailP>
              <Logo src={Logo_S} />
              {find ? (
                <>
                  <UserInfoBox>
                    <UserInfoInput type="text" placeholder="New Password" />
                    <UserInfoInput
                      type="text"
                      placeholder="Confirm New Password"
                    />
                  </UserInfoBox>
                  <Findbtn onClick={onFind}>확인</Findbtn>
                </>
              ) : (
                <>
                  <UserInfoBox>
                    <UserInfoInput type="text" placeholder="Name" />
                    <UserInfoInput type="email" placeholder="Email" />
                    <UserInfoInput type="text" placeholder="Phone" />
                  </UserInfoBox>
                  <Findbtn onClick={onFind}>찾기</Findbtn>
                </>
              )}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowPwModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #141414;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
  
}
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`
const UserInfoInput = styled.input`
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid #ef4d70;
  padding-bottom: 10px;
  margin-bottom: 40px;
  color: white;
  width: 10vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  font-size: 1.1rem;
`
const UserInfo = styled.div`
  padding-bottom: 10px;
  margin-bottom: 40px;
  color: white;
  width: 10vw;

  font-size: 1.1rem;
`

const EmailP = styled.div`
  font-size: 2rem;
  color: white;
  padding: 40px;
`

const UserInfoBox = styled.div`
  position: absolute;
  top: 160px;
  left: 400px;
  display: flex;
  flex-direction: column;
`

const Findbtn = styled.button`
  position: absolute;
  top: 400px;
  left: 400px;
  border-radius: 8px;
  color: balck;
  width: 200px;
  height: 50px;
  background-color: white;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  font-size: 1.1rem;
`
const Logo = styled.img`
  width: 250px;
  margin-left: 50px;
`
