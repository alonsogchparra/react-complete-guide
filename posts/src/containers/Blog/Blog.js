import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {

  state = {
    posts: [],
    postSelected: null,
    error: false
  };

  render () {

    let posts = <p style={{textAlign: 'center'}}>Something is wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
                  key={post.id} 
                  title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)} />
      });
  
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
      </div>
    )
  }
}

export default Blog;