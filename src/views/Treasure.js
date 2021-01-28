import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import key from '../assets/key.png';
import Navbar from '../components/Navbar';
import { getChest } from '../logic/ennara';
import { breakpoints } from '../theme/theme';
import fetchEnnara from '../context/fetchEnnara';
import Context from '../context/store';
import Loader from '../components/Loader';
import Chest from '../components/ennara/Chest';

const Key = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 5rem;

  cursor: pointer;

  > img {
    width: 100%;
  }
`;

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Chests = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin-top: 5rem;
`;

const Treasure = () => {
  fetchEnnara();

  const { state } = useContext(Context);
  const { initializedEnnara, loading } = state;
  const { rewards } = state;

  const [chests, setChests] = useState();

  const getChests = () => {
    setChests([getChest(rewards), getChest(rewards), getChest(rewards)]);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Key onClick={getChests}>
          <img src={key} alt="Chiave" />
        </Key>
      </Container>

      {(() => {
        if (!initializedEnnara || loading) return <Loader />;

        if (chests)
          return (
            <Container>
              <Chests>
                {chests.map((chest, index) => (
                  <Chest key={`treasure-${index}`} {...chest} />
                ))}
              </Chests>
            </Container>
          );
      })()}
    </>
  );
};

export default Treasure;
