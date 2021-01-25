import React from 'react';
import styled from 'styled-components'

const noname = () => {
    return(
        <Div></Div>
    )
}

export default noname;

// <------------ css ------------> //

const Div = styled.div`
    background-color:red;
    width: calc(100vw - 500px);
    height: 100%;
`