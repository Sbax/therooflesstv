import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from './context/store';

const Mons = styled.section`
  display: flex;

  > * + * {
    margin-left: 1.5rem;
  }
`;

const Mon = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const matchMon = (number, mons) => mons.find((mon) => mon.number === number);

const Team = ({ team }) => {
  const { state } = useContext(Context);

  const { mons } = state;

  return (
    <Mons>
      {team.map((member) => {
        const mon = matchMon(member.number, mons);
        const {
          sprite,
          generation,
          number,
          name,
          types,
          catchRate,
          slug,
        } = mon;
        return (
          <Mon key={slug}>
            <Sprite src={sprite} />
            <Name>{name}</Name>
            <Generation>Generazione {generation}</Generation>
          </Mon>
        );
      })}
    </Mons>
  );
};

export default Team;
