import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

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
  };

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons }); 
  };

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
  };

  render () {


    let persons = null;
    let btnClass = '';

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
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This Really working</p>
        <button className={btnClass} onClick={this.toggleHandler}>Toggle Person</button>
        {persons}
      </div>
    )
  }
}

export default App