import React from 'react';
import styled from 'styled-components';
import { fontFamily } from './theme/theme';

const Container = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0.5;

  font-family: ${fontFamily.serif};

  > * + * {
    margin-top: 2rem;
  }

  > span {
    font-size: 3rem;

    &.face {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

const NoPage = () => {
  return (
    <Container>
      <span className="face">(งಠ_ಠ)ง</span>
      <span>Scegli una pagina</span>
    </Container>
  );
};

export default NoPage;
