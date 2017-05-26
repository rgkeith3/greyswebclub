import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from '../dashboard/video_player'
import AudioPlayer from '../dashboard/audio_player'


class DetailItem extends React.Component{
  constructor(props) {
    super(props)
    this.postTop = this.postTop.bind(this)
    this.content = this.content.bind(this)
    this.liked = this.liked.bind(this)
    this.icon = this.icon.bind(this)
    this.toggleLike = this.toggleLike.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  content() {
    switch (this.props.post.post_type) {
      case 'txt':
        return (
          <p>{this.props.post.content}</p>
        )
      case 'pic':
        return (
          <img src={this.props.post.attachment_url} />
        )
      case 'url':
        return (
          <a href={this.props.post.content}>{this.props.post.content}</a>
        )
      case 'aud':
        let audUrl = this.props.post.attachment_url
        return (
          <AudioPlayer url={audUrl} />
        )
      case 'vid':
        let vidUrl = this.props.post.attachment_url
        return (
          <VideoPlayer url={vidUrl} />
        )
      default:
        <p>Whoops, something went wrong</p>
    }
  }

  postTop() {
    if (this.props.currentUser && (this.props.post.user.id === this.props.currentUser.id)) {
      return (
        <div className='post-top'>
          <p>you posted this</p>
          <i className='fa fa-times' onClick={this.deletePost}></i>
        </div>
      )
    } else {
      return (
        <div className='post-top'>
          <p>{this.props.post.user.username}</p>
        </div>
      )
    }
  }

  deletePost() {
    this.props.requestDeletePost(this.props.post.id)
  }

  toggleLike() {
    if (this.liked()) {
      this.props.requestDeleteLike(this.props.post.likers[this.props.currentUser.id])
    } else {
      this.props.receivePost(this.props.post)
      let like = { user_id: this.props.currentUser.id, post_id: this.props.post.id }
      this.props.requestCreateLike(like)
    }
  }

  liked() {
    return Boolean(this.props.post.likers && this.props.post.likers[this.props.currentUser.id])
  }

  likes() {
    if (this.props.post.likers && Object.keys(this.props.post.likers).length > 0) {
      if (Object.keys(this.props.post.likers).length === 1) {
        return (
          <p>1 like</p>
        )
      }
      return (
        <p>{Object.keys(this.props.post.likers).length} likes</p>
        )
    }
  }

  icon() {
    return this.liked() ? 'fa fa-heart': 'fa fa-heart-o'
  }


  render() {

    return (
      <section className='post' >
        { this.postTop() }
        { this.content() }
        <div className='post-bottom'>
          <p></p>
          <div className='likes'>
            { this.likes() }
            {this.props.currentUser &&
              <i className={ this.icon() }
               onClick={this.toggleLike}></i>}
          </div>
        </div>
      </section>
    )
  }
}

export default DetailItem
