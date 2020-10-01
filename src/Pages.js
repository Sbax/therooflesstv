import React from 'react';
import styled from 'styled-components';
import { Link, useRoute } from 'wouter';
import NoPage from './NoPage';
import Page from './Page';
import { breakpoints, fontFamily, theme } from './theme/theme';

const Sidebar = styled.aside`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  font-family: ${fontFamily.serif};
`;

const List = styled.ul`
  background: ${theme.primary};
  color: ${theme.offWhite};
  height: 100%;
  padding: 1rem 0;
  margin-left: 0.5rem;

  > li {
    cursor: pointer;
    transition: opacity 300ms ease-in-out;
    opacity: 0.5;

    border-left: 0.2em solid ${theme.offWhite};
    padding: 0.5em 0;
    padding-left: 0.75em;

    > a {
      color: ${theme.offWhite};
    }

    &:hover,
    &.active {
      opacity: 1;
    }
  }
`;

const Content = styled.section`
  background: ${theme.grey};
`;

const Container = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 3fr;

  > * {
    height: 100%;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    display: block;

    ${Content} {
      display: none;
    }

    &.matches {
      ${Sidebar} {
        display: none;
      }

      ${Content} {
        display: block;
      }
    }
  }
`;

const Pages = () => {
  const pages = ((ctx) => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    const toKebabCase = (string) =>
      string
        .toLowerCase()
        .replace(/ /g, '-')
        .replace('./', '')
        .replace('.json', '');

    return values.map((value, index) => ({
      ...value,
      slug: toKebabCase(keys[index]),
    }));
  })(require.context('./data/pages', true, /.*.json/));

  const [match, params] = useRoute('/pages/:slug');

  return (
    <Container className={match && 'matches'}>
      <Sidebar>
        <Title>Pagine</Title>
        <List>
          {pages.map(({ slug, title }) => (
            <li
              key={slug}
              className={match && params.slug === slug && 'active'}
            >
              <Link href={`/pages/${slug}`}>{title}</Link>
            </li>
          ))}
        </List>
      </Sidebar>
      <Content>
        {!match ? (
          <NoPage />
        ) : (
          (() => {
            const page = pages.find(({ slug }) => slug === params.slug);

            return <Page page={page} />;
          })()
        )}
      </Content>
    </Container>
  );
};

export default Pages;
