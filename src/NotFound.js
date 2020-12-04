import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import DecoratedPage from './DecoratedPage';
import Navbar from './Navbar';

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

const NotFound = () => {
  return (
    <>
      <Navbar />
      <DecoratedPage>
        <Center>
          <span className="face">(ง ° ͜ ʖ °)ง</span>
          <span>Non c'è un ca* qui</span>
          <span className="call-to-action">
            Torna alla <Link href="/">home</Link>
          </span>
        </Center>
      </DecoratedPage>
    </>
  );
};

export default NotFound;
