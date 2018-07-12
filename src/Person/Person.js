import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>Hi I'm {props.name} and I'm {props.age} years old!!</p>
      <input type="text" />
    </div>
  );
}

export default person;