import React from 'react'
import { throttle } from 'lodash'

import DashboardItemContainer from '../dashboard/dashboard_item_container'

class Explore extends React.Component {
  constructor(props){
    super(props)
    this.handleScrolling = this.handleScrolling.bind(this)
    this.handleScrolling = throttle(this.handleScrolling, 500)
    this.fireRequest = this.fireRequest.bind(this)
    this.animation = this.animation.bind(this)

    this.state = {
      post_offset: 0,
      animate: true
    }
  }

  componentWillMount() {
    this.props.clearPosts()
    document.addEventListener('scroll', this.handleScrolling)
    this.props.requestExplorePosts(this.state.post_offset)
      .then(this.setState({post_offset: this.state.post_offset += 15 }))
  }



  handleScrolling() {
    let totalHeight = document.documentElement.scrollHeight
    let clientHeight = document.documentElement.clientHeight
    let scrollTop = (document.body && document.body.scrollTop)
      ? document.body.scrollTop : document.documentElement.scrollTop
    if( totalHeight - 700 < scrollTop + clientHeight ) {

      this.fireRequest()
    }
  }

  fireRequest() {
    this.props.requestExplorePosts(this.state.post_offset)
      .then(this.setState({post_offset: this.state.post_offset + 15}))
  }

  animation() {
    if (this.state.animate) {
      return 'dashboard-items dashboard-animate'
    } else {
      return 'dashboard-items'
    }
  }

  render() {
    return (
      <section className="dashboard">
        <div className={ this.animation() }>
          {this.props.posts.map(post => (
            <DashboardItemContainer key={post.id}
                                    post={post}
                                    />
          ))}
        </div>
      </section>
    )
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrolling)
    this.props.clearPosts()
  }
}

export default Explore
