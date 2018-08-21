import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';

class Counter extends Component {
  render () {
    return (
      <div>
        Counter
        <CounterOutput />
        <CounterControl />
        <CounterControl />
        <CounterControl />
        <CounterControl />
      </div>
    );
  }
}

export default Counter;