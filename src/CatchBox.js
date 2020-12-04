import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Balloon from './Balloon';
import great from './sprites/great.png';
import master from './sprites/master.png';
import poke from './sprites/poke.png';
import ultra from './sprites/ultra.png';

const Container = styled.section`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Balls = styled.section`
  min-height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    height: 2.5rem;
    width: 2.5rem;

    cursor: pointer;
  }

  > * + * {
    margin-left: 1rem;
  }
`;

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const CatchBox = ({ name, catchRate }) => {
  const [attempting, setAttempting] = useState(false);
  const [caught, setCaught] = useState();

  useEffect(() => {
    setAttempting();
    setCaught();
  }, [name]);

  const catchMon = (ballModifier) => {
    if (ballModifier === 0) return true;

    const M = 100;
    const H = 25;

    const X = ((3 * M - 2 * H) * catchRate * ballModifier) / (3 * M);

    if (X > 255) return true;

    const Y = 65536 / Math.sqrt(Math.sqrt(255 / X));

    const firstAttempt = randomNumber(0, 65535);
    if (firstAttempt > Y) return false;

    const secondAttempt = randomNumber(0, 65535);
    if (secondAttempt > Y) return false;

    const thirdAttempt = randomNumber(0, 65535);
    if (thirdAttempt > Y) return false;

    return true;
  };

  const tryCatch = (...params) => {
    setTimeout(() => {
      setCaught(catchMon(...params));
      setAttempting(false);
    }, 2000);

    setAttempting(true);
    setCaught(null);
  };

  if (attempting) {
    if (caught === true) return 'Preso!';
    if (caught === false) return 'Oh no è uscito!';
  }

  return (
    <Container>
      <Balloon>
        {(() => {
          if (attempting) return '...';
          if (caught === false) return 'Oh no è uscito!';
          if (caught) return 'Preso!';

          return `Appare ${name} selvatico!`;
        })()}
      </Balloon>

      <Balls>
        {!caught && !attempting && (
          <>
            <img onClick={() => tryCatch(1)} src={poke} alt="PokeBall" />
            <img onClick={() => tryCatch(1.5)} src={great} alt="GreatBall" />
            <img onClick={() => tryCatch(2)} src={ultra} alt="UltraBall" />
            <img onClick={() => tryCatch(0)} src={master} alt="MasterBall" />
          </>
        )}
      </Balls>
    </Container>
  );
};

export default CatchBox;
