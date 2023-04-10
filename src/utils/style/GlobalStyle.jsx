/*import { useContext } from 'react'*/
import { createGlobalStyle } from 'styled-components'
/*import { device } from '../../utils/style/Devices';*/
/*import { ThemeContext } from '../context'*/

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
