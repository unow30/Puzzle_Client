import Img from '../../../../images/icon/img.jpg'
import React from 'react'
import styled from 'styled-components'

const Puzzle9 = () => {
  return (
    <>
      {/* <ProjectPuzzleContainer> */}
      <ProjectPuzzleImg01 />
      <ProjectPuzzleImg02 />
      <ProjectPuzzleImg03 />
      <ProjectPuzzleImg04 />
      <ProjectPuzzleImg05 />
      <ProjectPuzzleImg06 />
      <ProjectPuzzleImg07 />
      <ProjectPuzzleImg08 />
      <ProjectPuzzleImg09 />
      {/* </ProjectPuzzleContainer> */}
    </>
  )
}

// const PeaceBorder = styled.div`
//   border: 5px solid #afafaf;
//   width: 100px;
//   height: 100px;
//   display: inline;
// `

const ProjectPuzzleContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const ProjectPuzzleImg01 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(0px, 100px, 100px, 0px);
  // 상 우 하 좌
`
const ProjectPuzzleImg02 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(0px, 200px, 100px, 100px);
  // 상 우 하 좌
`
const ProjectPuzzleImg03 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(0px, 300px, 100px, 200px);
  // 상 우 하 좌
`
const ProjectPuzzleImg04 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(100px, 100px, 200px, 0px);
  // 상 우 하 좌
`
const ProjectPuzzleImg05 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(100px, 200px, 200px, 100px);
  // 상 우 하 좌
`
const ProjectPuzzleImg06 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(100px, 300px, 200px, 200px);
  // 상 우 하 좌
`
const ProjectPuzzleImg07 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(200px, 100px, 300px, 0px);

  // 상 우 하 좌
`
const ProjectPuzzleImg08 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(200px, 200px, 300px, 100px);

  // 상 우 하 좌
`
const ProjectPuzzleImg09 = styled.div`
  background-image: url(${Img});
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  margin-top: 30px;
  clip: rect(200px, 300px, 300px, 200px);
  // 상 우 하 좌
`

export default Puzzle9
