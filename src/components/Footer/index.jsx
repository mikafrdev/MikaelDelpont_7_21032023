import Logo from '../../components/Logo'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding-top: 60px;
  background-color: ${colors.backgroundFooter};
  & .copyright {
    color: #FFF;
  }
`



export default function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </FooterContainer>
  )
}