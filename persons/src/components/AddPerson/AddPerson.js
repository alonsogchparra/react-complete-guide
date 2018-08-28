import React, { Component } from 'react'

class AddPerson extends Component {

  state = {
    name: '',
    age: ''
  };

  onChangeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  onChangeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  }

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={this.onChangeNameHandler}
          value={this.state.name} />

        <input
          type="number"
          placeholder="Age"
          onChange={this.onChangeAgeHandler}
          value={this.state.age} />

        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    )
  }
}

export default AddPerson;