import React from 'react';
import styled from 'styled-components';

const Ab = styled.div`
background-color:black;
width:500px;
height:500px;

@media ${(props) => props.theme.mobile}{
background-color:red;
width:500px;
height:500px;
}
`
const Home = () => {
    return <Ab></Ab>
}

export default Home;