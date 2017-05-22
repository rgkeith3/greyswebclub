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

  componentDidMount() {
    this.props.requestPosts()
  }

  render() {
    return (
      <section className="dashboard">
        <header className='post-header'>
          <Route exact path='/dashboard' component={PostHeader} />
          <Route path='/new' component={PostFormContainer} />
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
