import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './video_player'
import AudioPlayer from './audio_player'
import { fetchNewLike, fetchDestroyLike } from '../../util/likes_api_util'


class DashboardItem extends React.Component{
  constructor(props) {
    super(props)
    this.toggleLike = this.toggleLike.bind(this)
    this.content = this.content.bind(this)
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

  toggleLike() {
    if (this.liked()) {
      this.props.requestDeleteLike(this.props.post.likers[this.props.currentUserId])
    } else {
      let like = { user_id: this.props.currentUserId, post_id: this.props.post.id }
      this.props.requestCreateLike(like)
    }
  }

  liked() {
    return Boolean(this.props.post.likers && this.props.post.likers[this.props.currentUserId])
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
