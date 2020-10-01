import React from 'react';
import { Route } from 'wouter';
import Home from './Home';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
