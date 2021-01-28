import { useContext, useEffect } from 'react';
import { actions } from './actions';
import { checkSavedData, saveData } from './saveData';
import Context from './store';

const key = 'therooflesstv-pokemon';
const expirationKey = `${key}:expiration`;

const monsKey = `${key}:mons`;
const trainersKey = `${key}:trainers`;

const monsUrl = '/.netlify/functions/simple-be/mons';
const trainersUrl = '/.netlify/functions/simple-be/trainers';

const fetchMons = async () => {
  const saved = sessionStorage.getItem(monsKey);
  if (saved) return JSON.parse(saved);

  const mons = await (await fetch(monsUrl)).json();
  return mons;
};

const fetchTrainers = async () => {
  const saved = sessionStorage.getItem(trainersKey);
  if (saved) return JSON.parse(saved);

  const trainers = await (await fetch(trainersUrl)).json();
  return trainers;
};

const matchMon = (name, mons) => {
  const found = mons.find((mon) => mon.name === name);

  if (found) return found;

  return {
    generation: '???',
    number: '???',
    name,
    slug: name,
  };
};

export default () => {
  const { state, dispatch } = useContext(Context);
  const { initializedMons, loading } = state;

  useEffect(() => {
    if (!initializedMons && !loading) {
      dispatch({ type: actions.initializeMons });

      const savedMons = checkSavedData(expirationKey, monsKey);
      const savedTrainers = checkSavedData(expirationKey, trainersKey);

      if (savedMons && savedTrainers) {
        return dispatch({
          type: actions.gotMons,
          payload: { mons: savedMons, trainers: savedTrainers },
        });
      }

      Promise.all([fetchMons(), fetchTrainers()]).then(
        ([mons, trainersToMap]) => {
          const trainers = trainersToMap.map(({ team, ...trainer }) => ({
            ...trainer,
            team: team.map((current) => matchMon(current, mons)),
          }));

          saveData(mons, monsKey, expirationKey);
          saveData(trainers, trainersKey, expirationKey);

          return dispatch({
            type: actions.gotMons,
            payload: { mons, trainers },
          });
        }
      );
    }
  }, [initializedMons, loading, dispatch]);
};
