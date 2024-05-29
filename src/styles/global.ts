import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    border-radius: 4px;
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`
