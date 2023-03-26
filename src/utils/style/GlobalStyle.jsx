/*import { useContext } from 'react'*/
import { createGlobalStyle } from 'styled-components'
/*import { ThemeContext } from '../context'*/

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  body {
    
    
  }

  #root {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 1.25rem;
    max-width: 1240px;
  }

  @media (max-width: 480px) {
    body {
    }
  }

  a.current {
    text-decoration: underline
  }
  
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
