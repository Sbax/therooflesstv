import React from 'react';
import styled from 'styled-components';
import background from '../pokemon.png';

const Container = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-image: url(${background});
`;

const Pokemon = () => {
  return <Container />;
};

export default Pokemon;
