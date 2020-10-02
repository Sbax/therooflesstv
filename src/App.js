import React from 'react';
import { Route, Switch } from 'wouter';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import Pages from './Pages';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pages" component={Pages} />
        <Route path="/pages/:slug" component={Pages} />
        <Route path="/about" component={About} />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
