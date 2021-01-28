import { actions } from './actions';

export default (state, { type, payload }) => {
  switch (type) {
    case actions.initializeMons:
      return {
        ...state,
        loading: true,
      };

    case actions.gotMons:
      const { mons, trainers } = payload;

      return {
        ...state,
        mons,
        trainers,
        loading: false,
        initializedMons: true,
      };

    case actions.initializeEnnara:
      return {
        ...state,
        loading: true,
      };

    case actions.gotEnnara:
      const { players, rewards } = payload;

      return {
        ...state,
        players,
        rewards,
        loading: false,
        initializedEnnara: true,
      };

    default:
      return state;
  }
};
