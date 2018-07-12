import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This Really working</p>
        <button>Toggle Person</button>
        <Person />
      </div>
    )
  }
}

export default App