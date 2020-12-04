import { useContext, useEffect } from 'react';
import { actions } from './actions';
import Context from './store';

const fetchTrainers = async () =>
  (await fetch(`/.netlify/functions/simple-be/trainers`)).json();

const fetchMons = async () =>
  (await fetch(`/.netlify/functions/simple-be/mons`)).json();

export default () => {
  const { state, dispatch } = useContext(Context);
  const { initialized, loading } = state;

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch({ type: actions.initializeData });
      Promise.all([fetchMons(), fetchTrainers()]).then(([mons, trainers]) =>
        dispatch({ type: actions.gotData, payload: { mons, trainers } })
      );
    }
  }, [initialized, loading, dispatch]);
};
