import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import fetchData from '../context/fetchData';
import Context from '../context/store';
import { breakpoints, fontFamily, theme } from '../theme/theme';

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

  > span {
    background: ${theme.primary};
    color: white;
    padding: 0 0.35rem;
  }
`;

const Trainer = styled.div`
  line-height: 1.4;

  & + & {
    margin-top: 1rem;
  }
`;

const Trainers = () => {
  const { state } = useContext(Context);
  const { initialized, loading } = state;

  fetchData();

  const [search, setSearch] = useState('');

  const triggerSearch = ({ value }) => setSearch(value);

  return (
    <>
      <Navbar />
      <Container>
        {(() => {
          if (!initialized || loading) return <Loader />;
          const { trainers } = state;

          return (
            <>
              <Input
                onInput={(event) => {
                  triggerSearch(event.target);
                }}
                type="text"
                placeholder="Ricerca..."
              />
              {trainers
                .filter(({ name }) =>
                  name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ slug, number, name, team }) => (
                  <Trainer key={slug}>
                    <Title>
                      <span>{number.padStart(3, '0')}</span> {name}
                    </Title>
                    <Team team={team} />
                  </Trainer>
                ))}
            </>
          );
        })()}
      </Container>
    </>
  );
};

export default Trainers;
