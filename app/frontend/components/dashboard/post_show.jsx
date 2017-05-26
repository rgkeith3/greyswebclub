import React from 'react'
import DashboardItemContainer from './dashboard_item_container'

class PostShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestOnePost(parseInt(this.props.postId))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postId !== nextProps.postId) {
      this.props.clearPosts()
      this.props.requestOnePost(nextProps.postId)
    }
  }

  render() {
    if (!this.props.posts.posts[this.props.postId]) {
      return (<div/>)
    } else {
      return (
        <section className='dashboard'>
          <div className='dashboard-items dashboard-animate'>
            <DashboardItemContainer post={this.props.posts.posts[this.props.postId]} />
          </div>
        </section>
      )
    }
  }
}

export default PostShow
