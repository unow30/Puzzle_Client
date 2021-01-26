import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import axios from 'axios'

import Logo_S from '../Img/Puzzle_Logo_ Square.png'

export const FindEamilModal = ({ showEmailModal, setShowEmailModal }) => {
  const modalRef = useRef()
  const [find, setFind] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const onFind = e => {
    setFind(prev => !prev)
  }

  const findEmail = e => {
    axios
      .post('https://api.teampuzzle.ga:4000/user/findemail', {
        name,
        phone,
      })
      .then(res => {
        setEmail(`당신의 이메일은 : ${res.data.data}입니다.`)
        setFind(prev => !prev)
        e.preventDefault()
      })
      .catch(err => {
        setFind(prev => !prev)
        e.preventDefault()
        setEmail(`일치하는 이메일이 없습니다.`)
      })
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showEmailModal ? 1 : 0,
    transform: showEmailModal ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowEmailModal(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showEmailModal) {
        setShowEmailModal(false)
      }
    },
    [setShowEmailModal, showEmailModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  // const onSubmit = async e => {
  //   e.preventDefault()
  // }
  const onChange = e => {
    const {
      target: { name, value },
    } = e

    if (name === 'name') {
      setName(value)
    }
    if (name === 'tel') {
      setPhone(value)
    }
  }

  return (
    <>
      {showEmailModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showEmailModal={showEmailModal}>
              <EmailP>Email 찾기</EmailP>
              <Logo src={Logo_S} />
              {find ? (
                <>
                  <UserInfoBox>
                    <UserInfo> {email}</UserInfo>
                  </UserInfoBox>
                  <Findbtn onClick={onFind}>뒤로가기</Findbtn>
                </>
              ) : (
                <>
                  <UserInfoBox>
                    <UserInfoInput
                      onChange={onChange}
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                    <UserInfoInput
                      onChange={onChange}
                      name="tel"
                      type="text"
                      placeholder="Phone"
                    />
                  </UserInfoBox>
                  <Findbtn onClick={findEmail}>찾기</Findbtn>
                </>
              )}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowEmailModal(prev => !prev)}
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
