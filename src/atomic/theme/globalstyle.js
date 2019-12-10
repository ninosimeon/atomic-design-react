import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
  * {
    margin-right: 5px;
    padding: 0;
    box-sizing: border;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: ${theme("fonts.text")};
  }

  h1 {
    font-family: Montserrat, sans-serif;
    font-weight: 800;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    margin: 10px;
  }

  button {
    cursor: pointer;
  }

  a:focus {
    text-decoration: none;
  }
`;

export default GlobalStyle;
