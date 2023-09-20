import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {

    body {
      margin: 0 0.5rem !important;
      display: flex !important;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 10rem
  }

  body, input-security, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem
  }
`
