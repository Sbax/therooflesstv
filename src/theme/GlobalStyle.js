import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme, fontFamily } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: ${fontFamily.sans}, serif;
    color: ${theme.text};
    background: ${theme.mainBg};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.accent};
    text-decoration: none;

    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .75;
    }
  }

  b, strong {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }
`;

export default GlobalStyle;
