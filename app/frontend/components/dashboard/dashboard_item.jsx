import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './video_player'
import AudioPlayer from './audio_player'


class DashboardItem extends React.Component{
  constructor(props) {
    super(props)
    this.content = this.content.bind(this)
    this.followed = this.followed.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
    this.toggleLike = this.toggleLike.bind(this)
    this.liked = this.liked.bind(this)
    this.icon = this.icon.bind(this)
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

  followed() {
    if (this.props.currentUser) {
      return Boolean(this.props.currentUser.followees && this.props.currentUser.followees[this.props.post.user.id])
    } else {
      return false
    }
  }

  followButton() {
    let buttonText = "Follow"
    let buttonClass = ""
    if (this.followed()) {
      buttonText = "Following"
      buttonClass = 'following'
    }
    return (
      <button className={buttonClass}
              onClick={this.toggleFollow}>{buttonText}</button>
    )
  }

  toggleFollow() {
    if (this.followed()) {
      this.props.requestDeleteFollow(this.props.currentUser.followees[this.props.post.user.id])
    } else {
      let follow = { followee_id: this.props.post.user.id, follower_id: this.props.currentUser.id}
      this.props.requestCreateFollow(follow)
    }
  }

  toggleLike() {
    if (this.liked()) {
      this.props.requestDeleteLike(this.props.post.likers[this.props.currentUser.id])
    } else {
      let like = { user_id: this.props.currentUser.id, post_id: this.props.post.id }
      this.props.requestCreateLike(like)
    }
  }

  liked() {
    return Boolean(this.props.post.likers && this.props.post.likers[this.props.currentUser.id])
  }

  likes() {
    if (this.props.post.likers && Object.keys(this.props.post.likers).length > 0) {
      return (
        <p>{Object.keys(this.props.post.likers).length}</p>
        )
    }
  }

  icon() {
    return this.liked() ? 'fa fa-heart': 'fa fa-heart-o'
  }

  render() {
    return (
      <section className="post" >
        <div className='postTop'>
          <p>{this.props.post.user.username}</p>
          { this.followButton() }
        </div>
        { this.content() }
        <div className='postBottom'>
          <div className='likes'>
            { this.likes() }
            <i className={ this.icon() }
               onClick={this.toggleLike}></i>
          </div>
        </div>
      </section>
    )
  }
}

export default DashboardItem
