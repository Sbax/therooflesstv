import {
  faDiscord,
  faInstagram,
  faTelegram,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chroma from 'chroma-js';
import React from 'react';
import styled from 'styled-components';
import { announcement } from './data/home.json';
import Navbar from './Navbar';
import Container from './styled/Container';
import Hogwarts from './svgs/components/Hogwarts';
import { breakpoints, colors, fontFamily } from './theme/theme';

const Center = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 15vh;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }

  > * + * {
    margin-top: 0.75em;
  }
`;

const Title = styled.h1`
  font-family: ${fontFamily.serif};
  font-size: 3em;

  text-align: center;
`;

const Subtitle = styled.h2`
  font-family: ${fontFamily.serif};
  font-size: 2em;

  text-align: center;
`;

const Illustration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Icons = styled.div`
  font-size: 2.5em;
  display: flex;

  > * + * {
    margin-left: 0.75em;
  }
`;

const Announcement = styled.section`
  background: ${chroma(colors.tomatoRed).alpha(0.3)};

  padding: 2rem;
  margin: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.25), 0 0.15em 0.75em rgba(0, 0, 0, 0.22);
`;

const Home = () => {
  return (
    <Container as="main">
      <Navbar />
      <Illustration>
        <Hogwarts />
      </Illustration>
      <Center>
        <Title>The Roofless TV</Title>
        <Subtitle>
          Live <i>quasi</i> 24/7 solo su{' '}
          <a href="https://twitch.tv/therooflesstv">twitch.tv/therooflesstv</a>
        </Subtitle>

        <Icons>
          <a href="https://www.twitch.tv/therooflesstv">
            <FontAwesomeIcon icon={faTwitch} />
          </a>

          <a href="https://discord.gg/NrpcNP">
            <FontAwesomeIcon icon={faDiscord} />
          </a>

          <a href="https://www.instagram.com/therooflesstv/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://t.me/TheRoofless">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </Icons>

        {announcement && (
          <Announcement dangerouslySetInnerHTML={{ __html: announcement }} />
        )}
      </Center>
    </Container>
  );
};

export default Home;
