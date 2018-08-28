import React, { Component } from 'react';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';

class Persons extends Component {
  render () {
    return (
      <div>
        Persons
        <AddPerson />
        <Person />
      </div>
    )
  }
}

export default Persons;