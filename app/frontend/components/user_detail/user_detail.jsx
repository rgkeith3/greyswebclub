import React from 'react'
import DetailItemContainer from './detail_item_container'

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.followed = this.followed.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  componentWillMount() {
    this.props.requestUserDetail(this.props.userId)
      .then(this.props.requestUserPosts(this.props.userId))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.clearPosts()
      this.props.clearUserDetail()
      this.props.requestUserDetail(nextProps.userId)
        .then(this.props.requestUserPosts(nextProps.userId))
    }
  }

  componentWillUnmount() {
    this.props.clearPosts()
    this.props.clearUserDetail()
  }

  followed() {
    if (this.props.currentUser) {
      return Boolean(this.props.currentUser.followees && this.props.currentUser.followees[this.props.userId])
    } else {
      return false
    }
  }

  followButton() {
    let buttonText = "Follow"
    let buttonClass = ""
    if (this.followed()) {
      buttonText = "Following"
      buttonClass = 'following'
    }
    return (
      <button className={buttonClass}
              onClick={this.toggleFollow}>{buttonText}</button>
    )

  }

  toggleFollow() {
    if (this.followed()) {
      this.props.requestDeleteFollow(this.props.currentUser.followees[this.props.userId])
    } else {
      let follow = { followee_id: this.props.userId, follower_id: this.props.currentUser.id}
      this.props.requestCreateFollow(follow)
    }
  }

  render() {
    if (!this.props.userDetail.id) {
      return (<div/>)
    } else {
      return (
        <section className="dashboard">
          <header className="user-show-header">
            <h1>{this.props.userDetail.username}</h1>
            { this.props.currentUser.id !== parseInt(this.props.userId) &&
              this.followButton()
            }
          </header>
          <div className='dashboard-items dashboard-animate'>
            {this.props.posts.map(post => (
              <DetailItemContainer key={post.id}
                             post={post}
                             />
            ))}
          </div>
        </section>
      )
    }
  }
}

export default UserDetail
