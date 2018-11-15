import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {

  static getInitialProps (context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App'});
      }, 1000);
    });
    return promise
  }

  render () {
    return (
      <div>
        <h1>Main Page of {this.props.appName}</h1>
        <Link href="/auth"><a>Auth</a></Link>
      </div>
    );
  }
}

export default IndexPage;