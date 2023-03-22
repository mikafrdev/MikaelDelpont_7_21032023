import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  background-color: ${colors.backgroundFooter};
`

function Footer() {
  return (
    <FooterContainer>
      © 2020 Kasa. All rights reserved
    </FooterContainer>
  )
}

export default Footer
