import React, { Component } from 'react'
import "./styles.css";
import { posts } from '../../data'
import { uid } from "react-uid";
import Post from '../../components/post';

export class DiscussionPanel extends Component {
     //hardcoded data for testing.
    state = {
      gamePosts: [posts[0], posts[1]]
    }

    addLike = (post) => {
      console.log(post == this.state.gamePosts[1])
      const copy = this.state.gamePosts.filter((item) => item !== post);

      const index = this.state.gamePosts.indexOf(post);
      let count = parseInt(post.likes) 
      count += 1
      post.likes = count.toString()
      console.log(copy, post.likes, count)
      copy.splice(index, 0, post)

      this.setState({
        gamePosts: copy
      })
    }

    disLike = (post) => {
      console.log(post == this.state.gamePosts[1])
      const copy = this.state.gamePosts.filter((item) => item !== post);

      const index = this.state.gamePosts.indexOf(post);
      let count = parseInt(post.dislikes) 
      count += 1
      post.dislikes = count.toString()
      console.log(copy, post.likes, count)
      copy.splice(index, 0, post)

      this.setState({
        gamePosts: copy
      })
    }

  render() {
    const { index, page, gameAdminLoggedIn, siteAdminLoggedIn, userLoggedIn } = this.props
    const { gamePosts } = this.state

    return (
      <div> 
        {
          index === page && (
          <div>
            {gamePosts.map((post) => {
              return (
                <Post 
                  key={uid(post)}
                  post={post}
                  loggedIn={userLoggedIn || gameAdminLoggedIn || siteAdminLoggedIn}
                  addLike={this.addLike}
                  disLike={this.disLike}
                  isAdmin={ gameAdminLoggedIn || siteAdminLoggedIn }/>
              )
            })}
          </div>
         )
      }  
        
      </div>   
    )
  }
}

export default DiscussionPanel