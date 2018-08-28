import React, { Component } from 'react';
import Persons from './containers/Persons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Persons />
      </div>
    );
  }
}

export default App;
