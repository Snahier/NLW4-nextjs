import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }
    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: ${theme.background};
      color: ${theme.text};
    }

    body,
    input,
    textarea,
    button {
      font-size: 1rem;
      font-weight: 400;
      font-family: ${theme.fonts.inter}, sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      margin: 0 auto;
      max-width: 992px;
      height: 100vh;
      padding: 2.5rem 2rem;

      display: flex;
      flex-direction: column;
    }
  `}
`
