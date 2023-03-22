import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const HomeLogo = styled.img`
  height: 70px;
`

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundFooter};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.backgroundFooter};
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
    </ErrorWrapper>
  )
}

export default Error
