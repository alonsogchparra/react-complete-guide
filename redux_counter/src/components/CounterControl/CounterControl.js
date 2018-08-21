import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
  <div className="CounterControl">
    {props.label}
  </div>
);

export default counterControl;