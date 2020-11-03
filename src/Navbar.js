import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { breakpoints, theme } from './theme/theme';

const Container = styled.header`
  background: ${({ transparent }) =>
    transparent ? 'transparent' : theme.primary};
  padding: 1.5rem 2rem;

  position: sticky;
  top: 0;
  z-index: 1;
`;

const Content = styled.section`
  max-width: ${breakpoints.desktop};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${theme.offWhite};
    font-weight: bold;
  }
`;

const HomeIcon = styled.span`
  font-size: 2rem;
  cursor: pointer;

  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.75;
  }
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
        <HomeIcon>
          <Link href="/">
            <FontAwesomeIcon icon={faUserNinja} />
          </Link>
        </HomeIcon>

        <Navigation>
          <Link href="/pages">Leggi la storia</Link>
          <Link href="/subjects">Lezioni</Link>
          <Link href="/about">About</Link>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Navbar;
