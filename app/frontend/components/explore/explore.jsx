import React from 'react'

import DashboardItemContainer from '../dashboard/dashboard_item_container'

class Explore extends React.Component {
  constructor(props){
    super(props)
    this.handleScrolling = this.handleScrolling.bind(this)
    this.fireRequest = this.fireRequest.bind(this)
    this.animation = this.animation.bind(this)
    this.state = {
      post_offset: 0,
      fireLoad: false,
      animate: true
    }
  }

  componentWillMount() {
    document.addEventListener('scroll', this.handleScrolling)
    this.props.requestExplorePosts(this.state.post_offset)
      .then(this.setState({post_offset: this.state.post_offset += 15 }))
  }

  componentDidUpdate() {
    document.addEventListener('scroll', this.handleScrolling)
  }


  handleScrolling() {
    let totalHeight = document.documentElement.scrollHeight
    let clientHeight = document.documentElement.clientHeight
    let scrollTop = (document.body && document.body.scrollTop)
      ? document.body.scrollTop : document.documentElement.scrollTop
    if( totalHeight - 200 < scrollTop + clientHeight ) {
      this.setState({fireLoad: true}, this.fireRequest)
    }
    console.log(document.body.scrollTop);
  }

  fireRequest() {
    this.setState({animate: false})
    document.removeEventListener('scroll', this.handleScrolling)
    if (this.state.fireLoad) {
      this.props.requestExplorePosts(this.state.post_offset)
        .then(this.setState({fireLoad: false, post_offset: this.state.post_offset + 15}))
    }
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
}

export default Explore
