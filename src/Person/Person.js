import React from 'react';

import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>Hi I'm {props.name} and I'm {props.age} years old!!</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default person;