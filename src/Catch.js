import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useRoute } from 'wouter';
import Button from './Button';
import CatchBox from './CatchBox';
import fetchData from './context/fetchData';
import Context from './context/store';
import Filters from './Filters';
import Loader from './Loader';
import Mon from './Mon';
import Navbar from './Navbar';
import { breakpoints } from './theme/theme';

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

const Catch = () => {
  const { state } = useContext(Context);
  const { initialized, loading } = state;

  const { mons } = state;

  const [match, params] = useRoute('/catch/:slug?');
  const [_, setLocation] = useLocation();

  fetchData();

  const mon = match && mons && mons.find(({ slug }) => slug === params.slug);

  const [generations, setGenerations] = useState([1, 2, 3]);
  const [types, setTypes] = useState([
    'rock',
    'ground',
    'fighting',
    'grass',
    'bug',
    'flying',
    'water',
    'ice',
    'poison',
    'dark',
    'ghost',
    'electric',
    'normal',
    'steel',
    'fire',
    'dragon',
    'psychic',
    'fairy',
  ]);

  const getRandom = () => {
    const filtered = mons
      .filter(({ generation }) => generations.includes(generation))
      .filter(
        (item) => types.includes(item.types[0]) || types.includes(item.types[1])
      );

    setLocation(
      `/catch/${filtered[Math.floor(Math.random() * filtered.length)].slug}`
    );
  };

  return (
    <>
      <Navbar />
      <Container>
        {(() => {
          if (!initialized || loading) return <Loader />;

          return (
            <>
              <Button
                disabled={!types.length || !generations.length}
                onClick={getRandom}
              >
                Gotta Catch 'Em All!
              </Button>

              <Filters
                generationsInput={generations}
                typesInput={types}
                sendGenerations={(change) => setGenerations(change)}
                sendTypes={(change) => setTypes(change)}
              />

              {mon && (
                <>
                  <CatchBox {...mon} />
                  <Mon mon={mon} />
                </>
              )}
            </>
          );
        })()}
      </Container>
    </>
  );
};

export default Catch;
