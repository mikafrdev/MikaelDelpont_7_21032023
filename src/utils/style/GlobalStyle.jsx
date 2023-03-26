/*import { useContext } from 'react'*/
import { createGlobalStyle } from 'styled-components'
/*import { ThemeContext } from '../context'*/

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  #root {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 1.25rem;
    max-width: 1240px;
  }

  footer svg path {
    fill: #FFF
  }

  .copyright {
    color: #FFF
  }

  @media (max-width: 480px) {
    body {
    }
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
