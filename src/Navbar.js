import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { theme } from './theme/theme';

const Container = styled.header`
  background: ${theme.primary};
  padding: 1.5rem 2rem;
  padding-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

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

const Navbar = () => {
  return (
    <Container>
      <HomeIcon>
        <Link href="/">
          <FontAwesomeIcon icon={faHatWizard} />
        </Link>
      </HomeIcon>

      <Navigation>
        <Link href="/pages">Leggi la storia</Link>
        <Link href="/about">About</Link>
      </Navigation>
    </Container>
  );
};

export default Navbar;