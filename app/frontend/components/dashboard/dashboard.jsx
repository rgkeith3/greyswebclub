import React from 'react'

import DashboardItem from './dashboard_item'


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
        <header className="newPost">
          This is where buttons for the new post form go
        </header>
        {this.props.posts.map((post, id) => (
          <DashboardItem key={id} post={post} />
        ))}
      </section>
    )
  }
}

export default Dashboard
