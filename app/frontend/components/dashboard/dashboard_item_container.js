import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DashboardItem from './dashboard_item'
import { requestCreateLike, requestDeleteLike } from '../../actions/likes_actions'
import { requestCreateFollow, requestDeleteFollow } from '../../actions/follows_actions'
import { requestDeletePost } from '../../actions/posts_actions'

const mapStateToProps = ({ session }, { post, }) => ({
  currentUser: session.currentUser,
  post
})

const mapDispatchToProps = dispatch => ({
  requestCreateLike: (like) => dispatch(requestCreateLike(like)),
  requestDeleteLike: (id) => dispatch(requestDeleteLike(id)),
  requestCreateFollow: (follow) => dispatch(requestCreateFollow(follow)),
  requestDeleteFollow: (id) => dispatch(requestDeleteFollow(id)),
  requestDeletePost: (id) => dispatch(requestDeletePost(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardItem))
