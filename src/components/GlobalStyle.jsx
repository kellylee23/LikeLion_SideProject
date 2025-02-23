import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '42dot Sans';
    src: url('/fonts/42dotSans-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('/fonts/Paperlogy-8ExtraBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: '42dot Sans', sans-serif;
  }
`;

export default GlobalStyle;
