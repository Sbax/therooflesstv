import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import background from '../forest.png';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background: ${theme.mainBg};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-image: url(${background});

  position: absolute;
  bottom: -10rem;
`;

const Forest = () => {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
};

export default Forest;
