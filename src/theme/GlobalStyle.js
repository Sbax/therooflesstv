import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme, fontFamily } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      height: 100%;
  }

  body {
    font-family: ${fontFamily.sans}, serif;
    color: ${theme.offBlack};
    background: ${theme.offWhite}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.primary};
    text-decoration: none;

    transition: color 300ms ease-in-out;

    &:hover {
      opacity: .5;
    }
  }
`;

export default GlobalStyle;
