import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Counter.css';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" />
        <CounterControl label="Subtract" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreators.increment()),
    onDecrementCounter: () => dispatch (actionCreators.decrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);