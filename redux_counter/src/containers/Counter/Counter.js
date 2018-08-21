import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add 10" />
        <CounterControl label="Subtract 15" />
      </div>
    );
  }
}

export default Counter;