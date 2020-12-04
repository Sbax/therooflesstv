import styled from 'styled-components';
import { fontFamily, theme } from './theme/theme';
import chroma from 'chroma-js';

const Button = styled.button`
  font-family: ${fontFamily.serif};
  font-size: 1.3rem;
  cursor: pointer;

  position: relative;
  padding: 0.8rem 1rem;
  margin: 4px;
  text-align: center;
  border: none;
  color: ${theme.offBlack};
  background-color: white;
  box-shadow: inset -0.25em -0.25em ${theme.grey};

  overflow: visible;
  box-sizing: border-box;

  &:before,
  &:after {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    content: '';
    border-color: ${theme.offBlack};
    border-style: solid;
    border-width: 0.25rem;
  }

  &:before {
    top: -0.25rem;
    left: 0;
    border-right: 0.12rem;
    border-left: 0.12rem;
  }

  &:after {
    top: 0;
    left: -0.25rem;
    border-top: 0.12rem;
    border-bottom: 0.12rem;
  }

  &:hover {
    background-color: ${chroma(theme.grey).brighten(0.9)};
    box-shadow: inset -0.3em -0.3em ${theme.grey};
  }

  &:active {
    box-shadow: inset 0.25em 0.25em ${theme.grey};
  }
`;

export default Button;
