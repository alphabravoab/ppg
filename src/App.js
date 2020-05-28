import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Series from './Components/Series'
import Episode from './Components/Episode'
import Search from './Components/Search'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Series } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/episode/:id" component={ Episode } />
      <Route exact path="/series/:id" component={ Series } />
      <Redirect from="/" to="/series/6771" />
    </div>
  );
}

export default App;
