import React from "react";
import { createGlobalStyle } from "styled-components";
import "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import Arrow from "../../assets/arrow.svg";

const StyledGlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat-400';
    src: url("../style/fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat-500';
    src: url("../style/fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
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
    font-family: 'Montserrat', sans-serif;
  }
  
`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
