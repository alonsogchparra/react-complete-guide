import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'weqwdasd', name: 'Bruce', age: 30 },
      { id: 'weqwdasy', name: 'Selina', age: 28 },
      { id: 'weqwdast', name: 'Alfred', age: 50 },
      { id: 'weqwdasr', name: 'Dick', age: 24 },
      { id: 'weqwdase', name: 'Jason', age: 22 },
      { id: 'weqwdasw', name: 'Timothy', age: 20 },
      { id: 'weqwdasq', name: 'Damian', age: 15 },
    ],
    otherState: 'Something',
    showPersons: false
  }

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