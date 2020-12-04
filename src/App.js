import React, { useContext, useReducer } from 'react';
import { Route, Switch } from 'wouter';
import About from './About';
import Catch from './Catch';
import reducer from './context/reducer';
import Context from './context/store';
import Home from './Home';
import NotFound from './NotFound';
import Pages from './Pages';
import GlobalStyle from './theme/GlobalStyle';
import Trainers from './Trainers';

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
        <Route path="/catch" component={Catch} />
        <Route path="/about" component={About} />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Context.Provider>
  );
}

export default App;
