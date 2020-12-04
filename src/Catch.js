import React, { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import CatchBox from './CatchBox';
import Checkbox from './Checkbox';
import fetchData from './context/fetchData';
import Context from './context/store';
import Loader from './Loader';
import Mon from './Mon';
import Navbar from './Navbar';
import { breakpoints } from './theme/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Filters = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem;

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

const areas = {
  mountain: ['rock', 'ground', 'fighting'],
  forest: ['grass', 'bug', 'flying'],
  sea: ['water', 'ice'],
  cave: ['poison', 'dark', 'ghost'],
  urban: ['electric', 'normal', 'steel'],
  volcano: ['fire', 'dragon'],
  temple: ['psychic', 'fairy'],
};

const Catch = () => {
  const { state } = useContext(Context);
  const { initialized, loading } = state;

  const { mons } = state;

  const [mon, setMon] = useState();
  const [mountain, setMountain] = useState(true);
  const [forest, setForest] = useState(true);
  const [sea, setSea] = useState(true);
  const [cave, setCave] = useState(true);
  const [urban, setUrban] = useState(true);
  const [volcano, setVolcano] = useState(true);
  const [temple, setTemple] = useState(true);

  const [generations, setGenerations] = useState([1, 2, 3]);

  const hasGeneration = (generation) => generations.includes(generation);

  const changeGenerations = (generation) => {
    if (!hasGeneration(generation)) {
      setGenerations([...generations, generation]);
      return;
    }

    setGenerations(generations.filter((number) => number !== generation));
  };

  fetchData();

  const getAreaFilter = () =>
    [
      mountain ? areas.mountain : [],
      forest ? areas.forest : [],
      sea ? areas.sea : [],
      cave ? areas.cave : [],
      urban ? areas.urban : [],
      volcano ? areas.volcano : [],
      temple ? areas.temple : [],
    ].flat();

  const getRandom = () => {
    const areaFilter = getAreaFilter();

    const filtered = mons
      .filter(
        ({ types }) =>
          areaFilter.includes(types[0]) ||
          (types[1] && areaFilter.includes(types[1]))
      )
      .filter(({ generation }) => generations.includes(generation));

    console.log(filtered);

    setMon(filtered[Math.floor(Math.random() * filtered.length)]);
  };

  return (
    <>
      <Navbar />
      <Container>
        {(() => {
          if (!initialized || loading) return <Loader />;

          return (
            <>
              <Button
                disabled={!getAreaFilter().length || !generations.length}
                onClick={getRandom}
              >
                Gotta Catch 'Em All!
              </Button>

              <Filters>
                <Options>
                  <Checkbox checked={mountain} onChange={setMountain}>
                    Montagna
                  </Checkbox>
                  <Checkbox checked={forest} onChange={setForest}>
                    Foresta
                  </Checkbox>
                  <Checkbox checked={sea} onChange={setSea}>
                    Oceano
                  </Checkbox>
                  <Checkbox checked={cave} onChange={setCave}>
                    Caverna
                  </Checkbox>
                  <Checkbox checked={urban} onChange={setUrban}>
                    Urbano
                  </Checkbox>
                  <Checkbox checked={volcano} onChange={setVolcano}>
                    Vulcano
                  </Checkbox>
                  <Checkbox checked={temple} onChange={setTemple}>
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
              </Filters>

              {mon && (
                <>
                  <CatchBox {...mon} />
                  <Mon mon={mon} />
                </>
              )}
            </>
          );
        })()}
      </Container>
    </>
  );
};

export default Catch;
