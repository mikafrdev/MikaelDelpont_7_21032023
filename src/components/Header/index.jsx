import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../components/Logo';
import './Header.css';

const StyledLink = styled(NavLink)`
    color: ${colors.headerLinks};
`

export default function Header() {
    
    return (
        <nav className="headercontainer">
            <Logo />
            <div className="linkcontainer">
                <StyledLink to="/">ACCUEIL</StyledLink>
                <StyledLink to="/about">A PROPOS</StyledLink>
            </div>
        </nav>
    )
}