import React from 'react';
import styled from 'styled-components';
import Pokemon from '../backgrounds/components/Pokemon';
import { breakpoints } from '../theme/theme';

const Container = styled.section`
  max-width: ${breakpoints.desktop};
  margin: auto;
  padding: 0 1rem;
`;

const Illustration = styled.div`
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  display: flex;
  align-items: flex-end;
  overflow: hidden;

  > * {
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const DecoratedPage = ({ children }) => {
  return (
    <Container as="main">
      <Illustration>
        <Pokemon />
      </Illustration>
      {children}
    </Container>
  );
};

export default DecoratedPage;
