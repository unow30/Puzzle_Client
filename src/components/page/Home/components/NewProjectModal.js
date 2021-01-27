import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Img from '../../../../images/icon/img.jpg'
import { MdClose } from 'react-icons/md'
import axios from 'axios'

export const NewProjectModal = ({ showNewProject, setShowNewProject }) => {
  const modalRef = useRef()
  const [addMember, setAddMember] = useState(false)
  const [currMem, setCurrMem] = useState('김코딩')
  // const [currMem, setCurrMem] = useState(['김코딩'])

  const addMemberHandle = () => {
    setAddMember(prev => !prev)
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showNewProject ? 1 : 0,
    transform: showNewProject ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowNewProject(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showNewProject) {
        setShowNewProject(false)
      }
    },
    [setShowNewProject, showNewProject]
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
      {showNewProject ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showNewProject={showNewProject}>
              <Title>프로젝트 생성</Title>
              <ProjectListImg />
              <ProjectInfoBox>
                <ProjectInfo
                  onChange={onChange}
                  name="project"
                  type="text"
                  placeholder="프로젝트 이름"
                />
                <ProjectInfo
                  onChange={onChange}
                  name="project"
                  type="text"
                  placeholder="프로젝트 내용"
                />
              </ProjectInfoBox>

              <ProjectMemberInfo>프로젝트 인원</ProjectMemberInfo>
              <AddMemberbtn onClick={addMemberHandle}>멤버 추가</AddMemberbtn>
              <div>
                {addMember ? (
                  <>
                    <AddMemberInfo
                      onChange={onChange}
                      name="usercode"
                      type="text"
                      placeholder="Usercode를 입력해주세요. "
                    />
                    <AddUserCodebtn>추가</AddUserCodebtn>
                  </>
                ) : null}
              </div>

              <CurrMemBox>
                <CurrMem>{currMem}</CurrMem>
              </CurrMemBox>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowNewProject(prev => !prev)}
              />
              <CreateProjectbtnBox></CreateProjectbtnBox>
            </ModalWrapper>
          </animated.div>
          <CreateProjectbtn>프로젝트 생성</CreateProjectbtn>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: fixed;
  left: 35%;
  top: 30%;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #052439;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 12px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`

const Title = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
`
const ProjectListImg = styled.div`
  background-image: url(${Img});
  width: 150px;
  height: 150px;
  border-radius: 5%;
  background-size: cover;
  background-color: white;
  margin: 0 auto;
`
const StyledAlwaysScrollSection = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;

    /* 가로 스크롤 높이 */
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`
const ProjectInfo = styled.input`
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid #afafaf;
  padding-bottom: 10px;
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
const AddMemberInfo = styled.input`
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid #afafaf;
  padding-bottom: 10px;
  color: white;
  width: 10vw;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #afafaf;
  }
  font-size: 0.9rem;
  position: absolute;
  right: 10vw;
  top: 38vh;
`
const ProjectInfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  right: 10vw;
  top: 23vh;
  height: 8vh;
  background-color: transparent;
`
const AddMemberbtn = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  background-color: #afafaf;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-size: 0.7rem;
  position: absolute;
  right: 10vw;
  top: 34.5vh;

  &:active,
  &:focus {
    outline: none;
  }
`
const ProjectMemberInfo = styled.div`
  font-size: 1rem;
  color: white;
  position: absolute;
  top: 35vh;
  right: 16.7vw;
`

const CreateProjectbtn = styled.button`
  width: 260px;
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
  background-color: #fa991d;
  position: absolute;
  right: 10vw;
  bottom: 10px;
  display: block;
  &:hover {
    color: white;
  }
`
const CreateProjectbtnBox = styled.div`
  height: 500px;
`

const CurrMem = styled.div`
  font-size: 1em;
  color: white;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
`

const CurrMemBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  right: 18.48vw;
  top: 41vh;
  height: 8vh;
  border-top: 3px solid #fa991d;
`

const ProjectMemberInfoBox = styled.div``

const AddUserCodebtn = styled.span`
  color: white;
  margin-left: 2px;
  cursor: pointer;
  position: absolute;
  right: 10vw;
  top: 38vh;
  font-size: 0.9rem;
`
