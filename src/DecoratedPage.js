import React from 'react';
import styled from 'styled-components';
import Hogwarts from './svgs/components/Hogwarts';
import { breakpoints, theme } from './theme/theme';

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

  background: ${theme.primary};

  display: flex;
  align-items: flex-end;
`;

const DecoratedPage = ({ children }) => {
  return (
    <Container as="main">
      <Illustration>
        <Hogwarts />
      </Illustration>
      {children}
    </Container>
  );
};

export default DecoratedPage;
