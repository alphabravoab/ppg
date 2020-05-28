import React from 'react';
import { Route } from 'react-router-dom'
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
    </div>
  );
}

export default App;
