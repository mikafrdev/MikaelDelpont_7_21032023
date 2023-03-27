/*import { useContext } from 'react'*/
import { createGlobalStyle } from 'styled-components'
/*import { ThemeContext } from '../context'*/

const size = {
  mobile: "375px",
  desktop: "1440px",
}

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  body {
    margin: 0
  }

  #root {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    ppadding: 1.25rem;
    max-width: 1240px;
  }

  @media ${size.mobile} {
    
  }

  @media ${size.desktop} {
    
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
