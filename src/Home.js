import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';

const Center = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const Home = () => {
  return (
    <Container as="main">
      <Center></Center>
    </Container>
  );
};

export default Home;
