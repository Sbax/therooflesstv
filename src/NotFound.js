import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import Navbar from './Navbar';
import Container from './styled/Container';
import Hogwarts from './svgs/components/Hogwarts';

const Center = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  padding-top: 15vh;

  font-size: 3rem;

  > * + * {
    margin-top: 0.75em;
  }

  > span {
    opacity: 0.5;

    &.face {
      font-family: Arial, Helvetica, sans-serif;
    }

    &.call-to-action {
      opacity: 1;
    }
  }
`;

const Illustration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const NotFound = () => {
  return (
    <Container as="main">
      <Navbar />
      <Illustration>
        <Hogwarts />
      </Illustration>
      <Center>
        <span class="face">╰(•̀ 3 •́)━☆ﾟ.*･｡ﾟ</span>
        <span>Non c'è un ca* qui</span>
        <span className="call-to-action">
          Torna alla <Link href="/">home</Link>
        </span>
      </Center>
    </Container>
  );
};

export default NotFound;
