import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import box from './sprites/box.png';
import { breakpoints } from './theme/theme';

const Mons = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  grid-gap: 1rem;
`;

const Mon = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
`;

const Sprite = styled.img`
  width: 64px;
  height: auto;

  margin-bottom: 1rem;
`;

const Name = styled.span`
  font-size: 1.5em;
  line-height: 1em;
`;

const Generation = styled.span`
  font-size: 1em;
  opacity: 0.5;
`;

const Box = styled.section`
  margin-top: 0.5rem;
  padding: 1.2rem;

  > ${Mons} {
    position: relative;

    &:before {
      border-radius: 2rem;
      background-image: url(${box});

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      z-index: -1;
    }
  }
`;

const Team = ({ team }) => {
  return (
    <>
      <Mons>
        {team.slice(0, 6).map((mon) => {
          const { sprite, generation, name, slug } = mon;
          return (
            <Mon key={`${slug}-${uuidv4()}`}>
              <Sprite src={sprite} />
              <Name>{name}</Name>
              <Generation>Generazione {generation}</Generation>
            </Mon>
          );
        })}
      </Mons>
      {team.slice(6, team.length - 1).length ? (
        <Box>
          <Mons>
            {team.slice(6, team.length - 1).map((mon) => {
              const { sprite, generation, name, slug } = mon;
              return (
                <Mon key={`${slug}-${uuidv4()}`}>
                  <Sprite src={sprite} />
                  <Name>{name}</Name>
                  <Generation>Generazione {generation}</Generation>
                </Mon>
              );
            })}
          </Mons>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Team;
