import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
  render () {
    return (
      <div className="FullPost">
        <h1>Title</h1>
        <p>Author</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    )
  }
}

export default FullPost;