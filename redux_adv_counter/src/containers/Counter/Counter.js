import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Counter.css';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value="23" />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add 10" />
        <CounterControl label="Subtract" />
      </div>
    )
  }
}

export default Counter