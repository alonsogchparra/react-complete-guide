import React, { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <div>Toolbar</div>
        <div>Sidedrawer</div>
        <main>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout