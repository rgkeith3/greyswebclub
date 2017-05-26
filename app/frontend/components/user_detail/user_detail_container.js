import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { asArray } from '../../reducers/selectors'
import UserDetail from './user_detail'
import { requestUserPosts, clearPosts } from '../../actions/posts_actions'
import { requestCreateFollow, requestDeleteFollow } from '../../actions/follows_actions'
import { requestUserDetail, clearUserDetail } from '../../actions/user_detail_actions'

const mapStateToProps = ({ session, userDetail, posts }, { match }) => {
  return ({
  currentUser: session.currentUser,
  userDetail: userDetail.userDetail,
  posts: asArray(posts.posts),
  userId: match.params.id,
  errors: userDetail.errors
})}

const mapDispatchToProps = dispatch => ({
  requestUserDetail: (id) => dispatch(requestUserDetail(id)),
  requestUserPosts: (id) => dispatch(requestUserPosts(id)),
  requestCreateFollow: (follow) => dispatch(requestCreateFollow(follow)),
  requestDeleteFollow: (id) => dispatch(requestDeleteFollow(id)),
  clearPosts: () => dispatch(clearPosts()),
  clearUserDetail: () => dispatch(clearUserDetail())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail))
