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

        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Show Result</button>
        <ul>
          {this.props.results.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch (actionCreators.increment()),
    onDecrementCounter: () => dispatch (actionCreators.decrement()),
    onStoreResult: (result) => dispatch (actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch (actionCreators.deleteResult(id))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);