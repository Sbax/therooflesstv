import chroma from 'chroma-js';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Link as WouterLink } from 'wouter';
import { breakpoints, fontFamily, theme } from './theme/theme';

const Container = styled.section`
  max-height: 100vh;
  overflow: auto;
  padding: 2rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem 3rem;
  }

  > * + * {
    margin-top: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: ${fontFamily.serif};
  line-height: 1.2;
`;

const Picture = styled.img`
  display: inline-block;
  max-width: 100%;
`;

const Body = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;

  max-width: 80ch;

  color: ${chroma(theme.text).alpha(0.9)};

  strong,
  b {
    color: ${theme.text};
    font-weight: bolder;
  }
`;

const Link = styled(WouterLink)`
  display: none;

  + * {
    margin: 0;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Page = ({ page }) => {
  return (
    <Container>
      <Link href="/pages">Torna all'elenco</Link>
      <Title>{page.title}</Title>

      {page.picture && <Picture src={page.picture} alt={page.title} />}

      {page.content.map(({ body }) => (
        <Body key={uuidv4()} dangerouslySetInnerHTML={{ __html: body }} />
      ))}
    </Container>
  );
};

export default Page;
