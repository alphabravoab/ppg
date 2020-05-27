import React from 'react';
import { Route } from 'react-router-dom'
import Series from './Compnents/Series'
import Episodes from './Compnents/Episodes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Series } />
      <Route exact path="/episodes" component={ Episodes } />
    </div>
  );
}

export default App;
