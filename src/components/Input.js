import styled from 'styled-components';
import { fontFamily, theme } from '../theme/theme';

const Input = styled.input`
  font-family: ${fontFamily.serif};
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  outline: none;
  box-shadow: 0 0.25rem ${theme.offBlack}, 0 -0.25rem ${theme.offBlack},
    0.25rem 0 ${theme.offBlack}, -0.25rem 0 ${theme.offBlack};
`;

export default Input;
