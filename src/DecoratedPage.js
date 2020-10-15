import React from 'react';
import styled from 'styled-components';
import Village from './svgs/components/Village';
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
  overflow: hidden;

  > * {
    position: absolute;
    bottom: -1rem;
    width: 100%;
    opacity: 0.6;
  }
`;

const DecoratedPage = ({ children }) => {
  return (
    <Container as="main">
      <Illustration>
        <Village />
      </Illustration>
      {children}
    </Container>
  );
};

export default DecoratedPage;
