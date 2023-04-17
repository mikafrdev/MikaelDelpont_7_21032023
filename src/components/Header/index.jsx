import { NavLink } from "react-router-dom";
import './Header.css';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../components/Logo';

const StyledLink = styled(NavLink)`
    color: ${colors.headerLinks};
`

export default function Header() {
    
    return (
        <nav className="headercontainer">
            <Logo color={colors.headerLinks} />
            <div className="linkcontainer">
                <StyledLink to="/">ACCUEIL</StyledLink>
                <StyledLink to="/about">A PROPOS</StyledLink>
            </div>
        </nav>
    )
}