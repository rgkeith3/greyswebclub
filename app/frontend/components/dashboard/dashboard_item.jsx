import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './video_player'
import AudioPlayer from './audio_player'


class DashboardItem extends React.Component{

  render() {
    const content = (postType) => {
      switch (postType) {
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

    return (
      <section className="post" >
        { content(this.props.post.post_type) }
      </section>
    )
  }
}

export default DashboardItem
