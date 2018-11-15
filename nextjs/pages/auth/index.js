import React from 'react';

import User from '../../components/user';

const authIndexPage = (props) => (
  <div>
    <h1>Auth Page</h1>
    <User name="Alonso" age={29} />
  </div>
);

export default authIndexPage;