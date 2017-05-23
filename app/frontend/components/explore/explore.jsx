import React from 'react'

import DashboardItemContainer from '../dashboard/dashboard_item_container'

class Explore extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPosts()
  }

  render() {
    return (
      <section className="dashboard">
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

export default Explore
