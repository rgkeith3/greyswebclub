import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

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
          return (
            <ReactPlayer url={this.props.post.attachment} />
          )
        case 'vid':
          return (
            <video controls>
              <source src={this.props.post.attachment_url} type="video/mp4"/>
            </video>
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
