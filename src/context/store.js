import { createContext } from 'react';

const Context = createContext({
  initialized: false,
  loading: false,
});

export default Context;
