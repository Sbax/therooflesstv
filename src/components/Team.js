import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Mon from './Mon';
import box from '../sprites/box.png';
import storage from '../sprites/storage.png';
import { breakpoints } from '../theme/theme';

const Mons = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  grid-gap: 1rem;
`;

const Box = styled.section`
  margin-top: 0.5rem;

  > ${Mons} {
    position: relative;
    padding: 1rem 0;

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

const Toggle = styled.div`
  cursor: pointer;
  margin: 1rem 0;
`;

const Team = ({ team }) => {
  const [show, setShown] = useState(false);

  const toggle = () => setShown(!show);

  return (
    <>
      <Mons>
        {team.slice(0, 6).map((mon) => (
          <Mon key={`${mon.slug}-${uuidv4()}`} mon={mon} />
        ))}
      </Mons>
      {team.length > 6 && (
        <Toggle onClick={toggle}>
          <img src={storage} alt="storage" />
        </Toggle>
      )}
      {show && team.length > 6 ? (
        <Box>
          <Mons>
            {team.slice(6, team.length).map((mon) => (
              <Mon key={`${mon.slug}-${uuidv4()}`} mon={mon} />
            ))}
          </Mons>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Team;
