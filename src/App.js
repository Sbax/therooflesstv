import React, { useContext, useReducer } from 'react';
import { Route, Switch } from 'wouter';
import reducer from './context/reducer';
import Context from './context/store';
import GlobalStyle from './theme/GlobalStyle';
import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Pages from './views/Pages';
import Trainers from './views/Trainers';
import Treasure from './views/Treasure';

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pages/:slug?" component={Pages} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/treasure" component={Treasure} />
        <Route path="/about" component={About} />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Context.Provider>
  );
}

export default App;
