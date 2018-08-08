import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData () {
    if (this.props.match.params.id) {
      // using this.posts.match.params.id is giving us a number so to compare to a string you could do it with != instead of !==
      // if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) {
      // to turn the string to a number you can add + and that way compare equally
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
        axios.get('/posts/' + this.props.match.params.id)
          .then(response => {
            // console.log(response);
            this.setState({ loadedPost: response.data});
            // console.log('loadedPost', this.state.loadedPost);
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id)
      .then(response => {
        console.log(response);
      })
  }


  render () {

    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

    if (this.props.match.params.id) {
      post = <p style={{textAlign: 'center'}}>Loading...!!!</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button 
              className="Delete"
              onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;