import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
`

export default function Home() {
    
    return (
        <HomeContainer>
            <Link to="/">Home</Link>
        </HomeContainer>
    )
}