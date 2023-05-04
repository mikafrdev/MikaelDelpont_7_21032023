import React from "react";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`

  body {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
  }
  
`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
