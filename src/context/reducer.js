import { actions } from './actions';

export default (state, { type, payload }) => {
  switch (type) {
    case actions.initializeData:
      return {
        ...state,
        loading: true,
      };

    case actions.gotData:
      const { mons, trainers } = payload;

      return {
        ...state,
        mons,
        trainers,
        loading: false,
        initialized: true,
      };

    default:
      return state;
  }
};
