import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { breakpoints, fontFamily, theme } from './theme/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const Subject = styled.div`
  padding: 1rem 0;
  line-height: 1.4;
  max-width: 40rem;

  & + & {
    border-top: 1px solid white;
    margin-top: 1rem;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-family: ${fontFamily.serif};
`;

const Teacher = styled.h2`
  font-family: ${fontFamily.serif};
  opacity: 0.5;

  margin-bottom: 1rem;
`;

const Body = styled.div`
  * + * {
    margin-top: 1rem;
  }

  blockquote {
    opacity: 0.7;
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 0.25rem solid ${theme.offwhite};
  }
`;

const Subjects = () => {
  const subjects = ((ctx) => {
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
  })(require.context('./data/subjects', true, /.*.json/)).sort(
    (a, b) => a.subject - b.subject
  );

  return (
    <>
      <Navbar />
      <Container>
        {subjects.map(({ subject, teacher, description }) => (
          <Subject>
            <Title>{subject}</Title>
            <Teacher>{teacher}</Teacher>
            <Body dangerouslySetInnerHTML={{ __html: description }} />
          </Subject>
        ))}
      </Container>
    </>
  );
};

export default Subjects;
