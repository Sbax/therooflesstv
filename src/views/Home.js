import {
  faDiscord,
  faInstagram,
  faTelegram,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chroma from 'chroma-js';
import React from 'react';
import styled from 'styled-components';
import DecoratedPage from '../components/DecoratedPage';
import Navbar from '../components/Navbar';
import { announcement, showAnnouncement } from '../data/home.json';
import { breakpoints, colors, fontFamily } from '../theme/theme';

const Center = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 15vh;
  line-height: 1.4;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }

  > * + * {
    margin-top: 0.5em;
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

const Icons = styled.div`
  font-size: 2.5em;
  display: flex;

  > * + * {
    margin-left: 0.75em;
  }
`;

const Announcement = styled.section`
  font-size: 16px;
  background: ${chroma(colors.tomatoRed).alpha(0.6)};

  padding: 1.5em;
  margin: 2em;
  border-radius: 1em;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.25), 0 0.15em 0.75em rgba(0, 0, 0, 0.22);
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <DecoratedPage>
        <Center>
          <Title>The Roofless TV</Title>
          <Subtitle>
            Live <i>quasi</i> 24/7 solo su{' '}
            <a href="https://twitch.tv/therooflesstv">
              twitch.tv/therooflesstv
            </a>
          </Subtitle>

          <Icons>
            <a href="https://www.twitch.tv/therooflesstv">
              <FontAwesomeIcon icon={faTwitch} />
            </a>

            <a href="https://discord.gg/eJsJwxW">
              <FontAwesomeIcon icon={faDiscord} />
            </a>

            <a href="https://www.instagram.com/therooflesstv/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://t.me/TheRoofless">
              <FontAwesomeIcon icon={faTelegram} />
            </a>

            <a href="https://www.youtube.com/channel/UCy6WaQC3w5UNgSfrKLqFEhA">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Icons>

          {showAnnouncement && announcement && (
            <Announcement dangerouslySetInnerHTML={{ __html: announcement }} />
          )}
        </Center>
      </DecoratedPage>
    </>
  );
};

export default Home;
