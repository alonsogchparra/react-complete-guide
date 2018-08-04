import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {
  render () {
    return (
      <div>
        <section>
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <div>FullPost</div>
        </section>
        <section>
          <div>NewPost</div>
        </section>
      </div>
    )
  }
}

export default Blog;