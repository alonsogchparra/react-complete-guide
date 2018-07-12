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

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons }); 
  }

  changePersonNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  render () {

    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '15px',
      font:'inherit',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        click={() => this.deletePersonHandler(index)}
                        changed={(event) => this.changePersonNameHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This Really working</p>
        <button style={style} onClick={this.toggleHandler}>Toggle Person</button>
        {persons}
      </div>
    )
  }
}

export default App