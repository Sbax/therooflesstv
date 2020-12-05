import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import great from '../sprites/great.png';
import master from '../sprites/master.png';
import poke from '../sprites/poke.png';
import ultra from '../sprites/ultra.png';

const Container = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  const items = [poke, great, ultra, master];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setVisible((visible + 1) % items.length),
      800
    );

    return () => {
      clearTimeout(timer);
    };
  }, [visible, setVisible, items]);

  return (
    <Container>
      <img src={items[visible]} alt="Loading" />
    </Container>
  );
};

export default Loader;
