import React, { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import CatchBox from './CatchBox';
import fetchData from './context/fetchData';
import Context from './context/store';
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

  const [mon, setMon] = useState();

  fetchData();

  const getRandom = () => setMon(mons[Math.floor(Math.random() * mons.length)]);

  return (
    <>
      <Navbar />
      <Container>
        {(() => {
          if (!initialized || loading) return <Loader />;

          return (
            <>
              <Button onClick={getRandom}>Gotta Catch 'Em All!</Button>

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
