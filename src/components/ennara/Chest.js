import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import chroma from 'chroma-js';

const Container = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  cursor: pointer;

  > img {
    width: 100%;
    height: auto;

    &:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const Reward = styled.div`
  position: absolute;
  z-index: 1;

  height: 6rem;
  width: 100%;

  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 1rem;

  background: ${({ rarity }) => chroma.mix(theme[rarity], 'white', 0.25)};
  border-radius: 0.75rem;

  color: ${({ rarity }) => theme[rarity]};
  box-shadow: 0px 0px 3px 5px ${({ rarity }) => theme[rarity]};

  opacity: 0.95;
  display: ${({ open }) => (open ? 'flex' : 'none')};

  pointer-events: none;
`;

const Chest = ({ reward, rarity }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(false);
  }, [reward, rarity]);

  return (
    <Container onClick={() => setOpen(true)}>
      <Reward rarity={rarity} open={open}>
        {reward}
      </Reward>
      <img
        src={require(`../../assets/chest/chest-${rarity}${
          open ? '-open' : ''
        }.png`)}
        alt="chest"
      />
    </Container>
  );
};

export default Chest;
