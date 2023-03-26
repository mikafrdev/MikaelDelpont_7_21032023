//import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.svg'

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const LogoContainer = styled.div`
    display: flex;
`

const HomeLogo = styled.img`
    max-width: 37vw;
    max-height: 68px;
`

const LinkContainer = styled.div`
    display: flex;
`

const StyledLink = styled(NavLink)`
    color: ${colors.headerLinks};
    margin-left: 0.6rem;
    text-decoration: none;
    font-size: 1.3em;
    text-align: center;
    white-space: nowrap;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    &.active {
        text-decoration: underline;
    }
`

export default function Header() {
    
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/">
                    <HomeLogo src={logo} />
                </Link>
            </LogoContainer>
        
            <LinkContainer>
                <StyledLink activeclassname="current" to="/">ACCUEIL</StyledLink>
                <StyledLink activeclassname="current" to="/about">A PROPOS</StyledLink>
            </LinkContainer>

        </HeaderContainer>
    )
}