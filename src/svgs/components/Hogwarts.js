import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { ReactComponent as Castle } from '../hogwarts.svg';

const Container = styled.div`
  width: 100%;

  .cls-1 {
    fill: #5e4772;
  }

  .cls-2 {
    fill: #6b558e;
  }

  .cls-3 {
    fill: #916a6b;
    animation: animate 5s linear infinite alternate-reverse;

    @keyframes animate {
      0% {
        fill: ${theme.accent};
      }

      100% {
        fill: #916a6b;
      }
    }
  }
`;

const Hogwarts = () => {
  return (
    <Container>
      <Castle />
    </Container>
  );
};

export default Hogwarts;
