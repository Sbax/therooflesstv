import { useContext, useEffect } from 'react';
import { actions } from './actions';
import { checkSavedData, saveData } from './saveData';
import Context from './store';

const key = 'therooflesstv-pokemon';
const expirationKey = `${key}:expiration`;

const playersKey = `${key}:players`;
const rewardsKey = `${key}:rewards`;

const playersUrl = '/.netlify/functions/simple-be/players';
const rewardsUrl = '/.netlify/functions/simple-be/rewards';

const fetchPlayers = async () => {
  const saved = sessionStorage.getItem(playersKey);
  if (saved) return JSON.parse(saved);

  const players = await (await fetch(playersUrl)).json();
  return players;
};

const fetchRewards = async () => {
  const saved = sessionStorage.getItem(rewardsKey);
  if (saved) return JSON.parse(saved);

  const response = await (await fetch(rewardsUrl)).json();
  return response;
};

export default () => {
  const { state, dispatch } = useContext(Context);
  const { initializedEnnara, loading } = state;

  useEffect(() => {
    if (!initializedEnnara && !loading) {
      dispatch({ type: actions.initializeEnnara });

      const savedPlayers = checkSavedData(expirationKey, playersKey);
      const savedRewards = checkSavedData(expirationKey, rewardsKey);

      if (savedPlayers && savedRewards) {
        return dispatch({
          type: actions.gotEnnara,
          payload: { players: savedPlayers, rewards: savedRewards },
        });
      }

      Promise.all([fetchPlayers(), fetchRewards()]).then(
        ([players, rewards]) => {
          saveData(players, playersKey, expirationKey);
          saveData(rewards, rewardsKey, expirationKey);

          return dispatch({
            type: actions.gotEnnara,
            payload: { players, rewards },
          });
        }
      );
    }
  }, [initializedEnnara, loading, dispatch]);
};
