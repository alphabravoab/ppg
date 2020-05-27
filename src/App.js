import React from 'react';
import { Route } from 'react-router-dom'
import Series from './Components/Series'
import Episode from './Components/Episode'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Series } />
      <Route exact path="/episode/:id" component={ Episode } />
    </div>
  );
}

export default App;
