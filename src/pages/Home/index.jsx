import React from "react";
import styled from 'styled-components';
import Banniere from '../../components/Banniere';

const HomeContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
`

export default function Home() {
    
    return (
        <HomeContainer>
            <Banniere />
        </HomeContainer>
    )
}