import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Village } from '../village.svg';

const Container = styled.div`
  width: 100%;
`;

const Hogwarts = () => {
  return (
    <Container>
      <Village />
    </Container>
  );
};

export default Hogwarts;
