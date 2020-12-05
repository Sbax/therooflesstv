import { useContext, useEffect } from 'react';
import { actions } from './actions';
import Context from './store';

const key = 'therooflesstv-pokemon';
const expirationKey = `${key}:expiration`;
const trainersKey = `${key}:trainers`;
const monsKey = `${key}:mons`;

const fetchTrainers = async () => {
  const saved = sessionStorage.getItem(trainersKey);
  if (saved) return JSON.parse(saved);

  const trainers = await (
    await fetch(`/.netlify/functions/simple-be/trainers`)
  ).json();

  return trainers;
};

const fetchMons = async () => {
  const saved = sessionStorage.getItem(monsKey);
  if (saved) return JSON.parse(saved);

  const mons = await (await fetch(`/.netlify/functions/simple-be/mons`)).json();
  return mons;
};

const checkSavedData = () => {
  const saved = sessionStorage.getItem(expirationKey);
  if (saved) {
    const { expiresAt } = JSON.parse(saved);

    if (Date.parse(new Date()) > Date.parse(expiresAt)) {
      sessionStorage.clear();
    }
  }

  const savedMons = sessionStorage.getItem(monsKey);
  const savedTrainers = sessionStorage.getItem(trainersKey);

  if (savedMons && savedTrainers) {
    const mons = JSON.parse(savedMons);
    const trainers = JSON.parse(savedTrainers);

    return { mons, trainers };
  }
};

const saveData = (mons, trainers) => {
  sessionStorage.setItem(
    expirationKey,
    JSON.stringify({
      expiresAt: new Date(new Date().getTime() + 5 * 1 * 10e3),
    })
  );

  sessionStorage.setItem(monsKey, JSON.stringify(mons));
  sessionStorage.setItem(trainersKey, JSON.stringify(trainers));
};

export default () => {
  const { state, dispatch } = useContext(Context);
  const { initialized, loading } = state;

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch({ type: actions.initializeData });

      const saved = checkSavedData();
      if (saved) {
        return dispatch({
          type: actions.gotData,
          payload: { mons: saved.mons, trainers: saved.trainers },
        });
      }

      Promise.all([fetchMons(), fetchTrainers()]).then(
        ([mons, trainersToMap]) => {
          const trainers = trainersToMap.map(({ team, ...trainer }) => ({
            ...trainer,
            team: team.map((current) =>
              mons.find(({ number }) => number === current)
            ),
          }));

          saveData(mons, trainers);

          return dispatch({
            type: actions.gotData,
            payload: { mons, trainers },
          });
        }
      );
    }
  }, [initialized, loading, dispatch]);
};
