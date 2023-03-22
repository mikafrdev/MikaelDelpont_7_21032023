//import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.svg'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-left: 100px;
`

const LogoContainer = styled.div`
    display: flex;
`

const HomeLogo = styled.img`
    height: 68px;
`

const LinkContainer = styled.div`
    display: flex;
`

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #FF6060;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

export default function Header() {
    return (
        <NavContainer>
            
            <LogoContainer>
                <Link to="/">
                <HomeLogo src={logo} />
            </Link>
            </LogoContainer>
        
            <LinkContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">about</StyledLink>
            </LinkContainer>

        </ NavContainer>
    )
}