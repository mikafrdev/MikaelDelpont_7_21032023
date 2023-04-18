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

.arrowup {
  display: block;
  width: 14px;
  height: 8px;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  transform: rotate(180deg);
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.arrowdown {
  width: 32px;
  height: 30px;
  transform: rotate(-90deg);
}

`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
