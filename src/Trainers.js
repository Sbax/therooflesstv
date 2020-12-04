import React, { useContext } from 'react';
import styled from 'styled-components';
import fetchData from './context/fetchData';
import Context from './context/store';
import Loader from './Loader';
import Navbar from './Navbar';
import Team from './Team';
import { breakpoints, fontFamily } from './theme/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  font-family: ${fontFamily.serif};
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const Trainer = styled.div`
  padding: 1rem 0;
  line-height: 1.4;

  & + & {
    margin-top: 1rem;
    padding-top: 2rem;
  }
`;

const Trainers = () => {
  const { state } = useContext(Context);
  const { initialized, loading } = state;

  fetchData();

  return (
    <>
      <Navbar />
      <Container>
        {(() => {
          if (!initialized || loading) return <Loader />;
          const { trainers } = state;

          return trainers.map(({ name, slug, team }) => (
            <Trainer key={slug}>
              <Title>{name}</Title>
              <Team team={team} />
            </Trainer>
          ));
        })()}
      </Container>
    </>
  );
};

export default Trainers;
