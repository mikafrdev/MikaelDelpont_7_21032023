import Logo from '../../components/Logo'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 210px;
  background-color: ${colors.backgroundFooter};

  & .copyright {
    color: #FFF;
    margin-top: 15px;
    @media ${device.mobile} {
      font-size: 3.5vw;
    }
    @media ${device.laptop} {
      font-size: 24px;
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <Logo color={colors.secondary} />
      <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </FooterContainer>
  )
}