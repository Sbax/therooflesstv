import React from 'react';
import styled from 'styled-components';
import DecoratedPage from './DecoratedPage';
import Navbar from './Navbar';

const Center = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 15vh;
  max-width: 40rem;
  margin: auto;

  font-size: 1.2rem;
  line-height: 1.4;

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

const About = () => {
  return (
    <>
      <Navbar />
      <DecoratedPage>
        <Center>
          <p>
            Tutto il contenuto delle pagine è opera degli streamer e della chat
            del canale{' '}
            <a href="https://twitch.tv/therooflesstv">
              twitch.tv/therooflesstv
            </a>
          </p>
          <p>
            Il sito è realizzato da <a href="https://mb.maletta.space">me</a> e
            il codice sorgente è disponibile su{' '}
            <a href="https://github.com/Sbax/therooflesstv">GitHub</a>
          </p>

          <p>
            Vengono raccolti dati anonimi di navigazione rispettando GDPR, PECR,
            CCPA e senza utilizzare cookie attraverso{' '}
            <a href="https://beampipe.io/">beampipe</a>
          </p>
        </Center>
      </DecoratedPage>
    </>
  );
};

export default About;
