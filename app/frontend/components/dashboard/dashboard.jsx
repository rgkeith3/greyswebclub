import React from 'react'
import Modal from 'react-modal'
import { Route } from 'react-router-dom'

import DashboardItemContainer from './dashboard_item_container'
import PostHeader from './post_header'
import PostFormContainer from '../post_form/post_form_container'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    document.addEventListener('scroll', this.handleInfiniteScrolling)
  }

  componentDidMount() {
    this.props.requestPosts()
  }

  handleInfiniteScrolling() {
    let totalHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = (document.body && document.body.scrollTop)
      ? document.body.scrollTop : document.documentElement.scrollTop;
    if( totalHeight - 100 < scrollTop + clientHeight  && this.state.continueFetching) {
      this.props.requestBooks(this.state.totalBooks);
    }
  }

  render() {
    return (
      <section className="dashboard">
        <header className='post-header'>
          <Route exact path='/dashboard' component={PostHeader} />
          <Route path='/dashboard/new/:type' component={PostFormContainer} />
        </header>
        <div className="dashboard-items">
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

export default Dashboard
