import { useContext, useEffect } from 'react';
import { actions } from './actions';
import Context from './store';

const key = 'therooflesstv-pokemon';
const trainersKey = `${key}:trainers`;
const monsKey = `${key}:mons`;

const fetchTrainers = async () => {
  const saved = sessionStorage.getItem(trainersKey);
  if (saved) return JSON.parse(saved);

  const trainers = await (
    await fetch(`/.netlify/functions/simple-be/trainers`)
  ).json();

  sessionStorage.setItem(trainersKey, JSON.stringify(trainers));
  return trainers;
};

const fetchMons = async () => {
  const saved = sessionStorage.getItem(monsKey);
  if (saved) return JSON.parse(saved);

  const mons = await (await fetch(`/.netlify/functions/simple-be/mons`)).json();

  sessionStorage.setItem(monsKey, JSON.stringify(mons));
  return mons;
};

export default () => {
  const { state, dispatch } = useContext(Context);
  const { initialized, loading } = state;

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch({ type: actions.initializeData });
      Promise.all([fetchMons(), fetchTrainers()]).then(
        ([mons, trainersToMap]) => {
          const trainers = trainersToMap.map(({ team, ...trainer }) => ({
            ...trainer,
            team: team.map((current) =>
              mons.find(({ number }) => number === current)
            ),
          }));

          return dispatch({
            type: actions.gotData,
            payload: { mons, trainers },
          });
        }
      );
    }
  }, [initialized, loading, dispatch]);
};
