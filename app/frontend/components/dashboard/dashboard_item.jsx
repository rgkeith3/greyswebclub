import React from 'react'

class DashboardItem extends React.Component{

  render() {
    return (
      <section className="post">
        {this.props.post.content}
      </section>
    )
  }
}

export default DashboardItem
