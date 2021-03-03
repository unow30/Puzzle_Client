import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const PuzzleInfo = () => {
  
  return (
    <PuzzleContainer>
      <PuzzleHead>
        <PuzzleTitle>퍼즐이름 /</PuzzleTitle>
        <PuzzleUpdatedAt> 2021-02-13</PuzzleUpdatedAt>
        <Bottons>
          <PuzzleModified>수정</PuzzleModified>
          <PuzzleDeleted>삭제</PuzzleDeleted>
        </Bottons>
      </PuzzleHead>
      <br />
      <PuzzleContent>
        <PuzzleDesc>라우팅 작업</PuzzleDesc>
      </PuzzleContent>
      <div>댓글</div>
    </PuzzleContainer>
  )
}

const PuzzleContainer = styled.div`
  height: 80vh;
`
const PuzzleHead = styled.div`
  border: 3px solid red;

`
const PuzzleContent = styled.div`
  border: 3px solid blue;

`
const Bottons = styled.div`
  display: inline;
  border: 3px solid black;
  text-align: right;
`
const PuzzleTitle = styled.span`
  text-align: center;
  display: inline;
`

const PuzzleUpdatedAt = styled.span`
  display: inline;

`
const PuzzleModified = styled.button`
`

const PuzzleDeleted = styled.button`
  
`

const PuzzleDesc = styled.div`
  color: blue;
`



export default PuzzleInfo
