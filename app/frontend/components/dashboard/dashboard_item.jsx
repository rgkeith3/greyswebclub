import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './video_player'
import AudioPlayer from './audio_player'
import { fetchNewLike, fetchDestroyLike } from '../../util/likes_api_util'


class DashboardItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      liked: null
    }
    this.content = this.content.bind(this)
    this.liked = this.liked.bind(this)
  }

  componentWillMount(){
    this.setState({liked: this.liked})
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
  }

  liked() {
    this.props.post.likes.includes(like => like.user_id === this.props.currentUserId)
  }

  icon() {
    this.state.liked ? 'fa fa-heart': 'fa fa-heart-o'
  }

  render() {
    return (
      <section className="post" >
        { this.content() }
        <div className='postBottom'>
          <div className='likes'>
            <i className={ this.icon }
               onClick={ this.like }></i>
          </div>
        </div>
      </section>
    )
  }
}

export default DashboardItem
