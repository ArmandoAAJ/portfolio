import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #121214;
    --backgroundHeader: #202024;
    --primary: #FFFF;
    --secundary: #A8A8B3;
    --tertiary: #04d361
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720) {
      font-size: 87.5%; //14px
    }
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h6, h6, strong{
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
