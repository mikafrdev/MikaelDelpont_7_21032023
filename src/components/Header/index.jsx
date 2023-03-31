//import { getDefaultNormalizer } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import colors from '../../utils/style/colors'
import Logo from '../../components/Logo'

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const LinkContainer = styled.div`
    display: flex;
`

const StyledLink = styled(NavLink)`
    color: ${colors.headerLinks};
    margin-left: 0.6rem;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    @media ${device.mobile} {
        font-size: 3.5vw;
    }
    @media ${device.laptop} {
        font-size: 20px;
    }
    &.active {
        text-decoration: underline;
    }
`

export default function Header() {
    
    return (
        <HeaderContainer>
            <Logo color={colors.headerLinks} />
            <LinkContainer>
                <StyledLink to="/">ACCUEIL</StyledLink>
                <StyledLink to="/about">A PROPOS</StyledLink>
            </LinkContainer>
        </HeaderContainer>
    )
}