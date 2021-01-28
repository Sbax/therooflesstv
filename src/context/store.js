import { createContext } from 'react';

const Context = createContext({
  initializedEnnara: false,
  initializedMons: false,
  loading: false,
});

export default Context;
