import React from 'react';

const counterControl = (props) => (
  <div onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl;