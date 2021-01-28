import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, fontFamily } from '../theme/theme';
import Checkbox from './retro/Checkbox';

const Collapsed = styled.section`
  margin-top: 1rem;
  font-family: ${fontFamily.serif};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    opacity: 0.5;

    display: flex;
    justify-content: center;

    & + * {
      margin-top: 0.25rem;
    }

    > * + * {
      &:before {
        content: ', ';
      }
    }
  }
`;

const Expansion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamily.serif};
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const areasToTypes = {
  mountain: ['rock', 'ground', 'fighting'],
  forest: ['grass', 'bug', 'flying'],
  sea: ['water', 'ice'],
  cave: ['poison', 'dark'],
  urban: ['electric', 'normal', 'steel'],
  volcano: ['fire', 'dragon'],
  temple: ['psychic', 'fairy', 'ghost'],
};

const Filters = ({
  generationsInput,
  typesInput,
  sendGenerations,
  sendTypes,
}) => {
  const [expanded, setExpanded] = useState(false);

  const [generations, setGenerations] = useState(generationsInput);
  const [types, setTypes] = useState(typesInput);

  const hasGeneration = (generation) => generations.includes(generation);

  const changeGenerations = (generation) => {
    const newGenerations = (() => {
      if (!hasGeneration(generation)) {
        return [...generations, generation];
      }

      return generations.filter((number) => number !== generation);
    })();

    sendGenerations(newGenerations);
    setGenerations(newGenerations);
  };

  const hasType = (input) => input && types.includes(input[0]);

  const changeTypes = (inputTypes) => {
    const newTypes = (() => {
      if (!hasType(inputTypes)) {
        return [...types, ...inputTypes];
      }

      return types.filter((type) => !inputTypes.includes(type));
    })();

    sendTypes(newTypes);
    setTypes(newTypes);
  };

  return (
    <>
      <Collapsed>
        <section>
          {hasType(areasToTypes.mountain) && <span>Montagna</span>}
          {hasType(areasToTypes.forest) && <span>Foresta</span>}
          {hasType(areasToTypes.sea) && <span>Oceano</span>}
          {hasType(areasToTypes.cave) && <span>Caverna</span>}
          {hasType(areasToTypes.urban) && <span>Urbano</span>}
          {hasType(areasToTypes.volcano) && <span>Vulcano</span>}
          {hasType(areasToTypes.temple) && <span>Tempio</span>}
        </section>
        <section>
          <span>Generazione {generations.sort().join(', ')}</span>
        </section>
      </Collapsed>
      <Expansion onClick={() => setExpanded(!expanded)}>
        {!expanded ? (
          <>
            <span>Espandi</span>
            <span>
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </>
        ) : (
          <>
            <span>
              <FontAwesomeIcon icon={faSortUp} />
            </span>
            <span>Collassa</span>
          </>
        )}
      </Expansion>
      {expanded && (
        <Container>
          <Options>
            <Checkbox
              checked={hasType(areasToTypes.mountain)}
              onChange={() => changeTypes(areasToTypes.mountain)}
            >
              Montagna
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.forest)}
              onChange={() => changeTypes(areasToTypes.forest)}
            >
              Foresta
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.sea)}
              onChange={() => changeTypes(areasToTypes.sea)}
            >
              Oceano
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.cave)}
              onChange={() => changeTypes(areasToTypes.cave)}
            >
              Caverna
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.urban)}
              onChange={() => changeTypes(areasToTypes.urban)}
            >
              Urbano
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.volcano)}
              onChange={() => changeTypes(areasToTypes.volcano)}
            >
              Vulcano
            </Checkbox>

            <Checkbox
              checked={hasType(areasToTypes.temple)}
              onChange={() => changeTypes(areasToTypes.temple)}
            >
              Tempio
            </Checkbox>
          </Options>

          <Options>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((generation) => (
              <Checkbox
                key={`generation-${generation}`}
                checked={hasGeneration(generation)}
                onChange={() => changeGenerations(generation)}
              >
                Generazione {generation}
              </Checkbox>
            ))}
          </Options>
        </Container>
      )}
    </>
  );
};

export default Filters;
