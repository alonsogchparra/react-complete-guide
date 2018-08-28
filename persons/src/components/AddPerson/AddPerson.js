import React, { Component } from 'react'

class AddPerson extends Component {

  state = {
    name: '',
    age: ''
  };

  onNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  onAgeChangeHandler = (event) => {
    this.setState({ age: event.target.value });
  }

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={this.onNameChangeHandler}
           />
        <input
          type="number"
          placeholder="Age"
          onChange={this.onAgeChangeHandler}
           />
        <button>Add Person</button>
      </div>
    )
  }
}

export default AddPerson