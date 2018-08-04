import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {
  render () {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <div>NewPost</div>
        </section>
      </div>
    )
  }
}

export default Blog;