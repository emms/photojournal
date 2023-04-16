import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    height: -webkit-fill-available;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: Helvetica Now, sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
