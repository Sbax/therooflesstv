import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0.5;

  > * + * {
    margin-top: 2rem;
  }

  > span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
  }
`;

const NoPage = () => {
  return (
    <Container>
      <span>╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ </span>
      <span>Scegli una pagina</span>
    </Container>
  );
};

export default NoPage;
