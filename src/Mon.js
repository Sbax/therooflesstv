import React from 'react';
import styled from 'styled-components';
import { fontFamily } from './theme/theme';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${fontFamily.serif};
`;

const Sprite = styled.img`
  min-height: 175px;
  width: 175px;
  height: auto;
`;

const Name = styled.span`
  font-size: 1.75em;
  line-height: 1em;
`;

const Generation = styled.span`
  font-size: 1.25em;
  opacity: 0.5;
`;

const Mon = ({ mon }) => {
  const { sprite, generation, name } = mon;

  return (
    <Container>
      <Sprite src={sprite} />
      <Name>{name}</Name>
      <Generation>Generazione {generation}</Generation>
    </Container>
  );
};

export default Mon;
