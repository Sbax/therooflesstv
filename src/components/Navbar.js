import { ReactComponent as Logo } from '../assets/creature.svg';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { breakpoints, fontFamily, theme } from '../theme/theme';

const Container = styled.header`
  background: ${({ transparent }) =>
    transparent ? 'transparent' : theme.accent};

  font-family: ${fontFamily.serif};
  padding: 1.5rem 2rem;

  position: sticky;
  top: 0;
  z-index: 1;

  border-bottom: 0.25rem solid ${theme.offBlack};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.section`
  max-width: ${breakpoints.desktop};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${theme.mainBg};
  }
`;

const HomeIcon = styled.span`
  font-size: 2rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  color: ${theme.mainBg};
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.75;
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const Extra = styled.span`
  margin-left: 0.5rem;
`;

const Navigation = styled.nav`
  > * + * {
    margin-left: 1rem;
  }
`;

const Navbar = ({ transparent }) => {
  return (
    <Container transparent={transparent}>
      <Content>
        <LeftSection>
          <HomeIcon>
            <Link href="/">
              <Logo />
            </Link>
          </HomeIcon>

          <Extra>
            <Link className="extra" href="/treasure">
              Apri un forziere!
            </Link>
          </Extra>
        </LeftSection>

        <Navigation>
          <Link href="/pages">Leggi la storia</Link>
          <Link href="/about">About</Link>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Navbar;
