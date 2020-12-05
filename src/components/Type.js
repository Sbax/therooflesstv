import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

const typesColors = {
  grass: '#8CC16D',
  rock: '#B6A049',
  ice: '#A3D9D7',
  dragon: '#6A43E2',
  dark: '#6D5949',
  psychic: '#D57A8D',
  bug: '#ABB542',
  flying: '#A293D4',
  steel: '#B8B8D1',
  fire: '#E68642',
  fighting: '#AB3B33',
  ground: '#DAC07F',
  ghost: '#6C5991',
  poison: '#8D4D94',
  water: '#6F90E7',
  fairy: '#D2A9D7',
  electric: '#F5D55B',
  normal: '#A7A781',
};

const typesLabels = {
  grass: 'grass',
  rock: 'rock',
  ice: 'ice',
  dragon: 'dragon',
  dark: 'dark',
  psychic: 'psychc',
  bug: 'bug',
  flying: 'flying',
  steel: 'steel',
  fire: 'fire',
  fighting: 'fighting',
  ground: 'ground',
  ghost: 'ghost',
  poison: 'poison',
  water: 'water',
  fairy: 'fairy',
  electric: 'electr',
  normal: 'normal',
};

const Container = styled.span`
  background: ${({ type }) => typesColors[type]};
  color: white;

  text-transform: uppercase;

  min-width: 9ch;
  line-height: 1.2em;
  text-align: center;
  border-radius: 3px;

  text-shadow: 1px 1px ${chroma('black').alpha(0.6)};
  box-shadow: inset -1px -1px ${chroma('black').alpha(0.4)};
`;

const Type = ({ type }) => (
  <Container type={type}>{typesLabels[type]}</Container>
);

export default Type;
