import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link, useRoute } from 'wouter';
import NoPage from './NoPage';
import NotFound from './NotFound';
import Page from './Page';
import { breakpoints, fontFamily, theme } from './theme/theme';

const Sidebar = styled.aside`
  background: ${theme.primary};
  padding: 0 3rem;
`;

const HomeIcon = styled.span`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 2rem;
  padding: 1.5rem 0;

  font-family: ${fontFamily.serif};

  cursor: pointer;

  transition: opacity 300ms ease-in-out;

  > span {
    line-height: 0.68;
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    opacity: 0.75;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${fontFamily.serif};
  margin-bottom: 1rem;
`;

const List = styled.ul`
  color: ${theme.offWhite};

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
      overflow: scroll;
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

  const page = match && pages.find(({ slug }) => slug === params.slug);
  if (match && !page) {
    return <NotFound />;
  }

  return (
    <Container className={match && 'matches'}>
      <Sidebar>
        <Link href="/">
          <HomeIcon>
            <FontAwesomeIcon icon={faHatWizard} />
            <span>TheRooflessTV</span>
          </HomeIcon>
        </Link>
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
      <Content>{!match ? <NoPage /> : <Page page={page} />}</Content>
    </Container>
  );
};

export default Pages;
