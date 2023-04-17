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
    margin: 20px 0;
    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledLink = styled(NavLink)`
    color: ${colors.headerLinks};
    margin-left: 10px;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    font-size: 3.5vw;
    @media ${device.tablet} {
        font-size: 24px;
        margin-left: 57px;
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