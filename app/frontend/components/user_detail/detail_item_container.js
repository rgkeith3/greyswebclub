import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DetailItem from './detail_item'
import { requestCreateLike, requestDeleteLike } from '../../actions/likes_actions'
import { requestCreateFollow, requestDeleteFollow } from '../../actions/follows_actions'
import { requestDeletePost, receivePost } from '../../actions/posts_actions'

const mapStateToProps = ({ session }, { post }) => ({
  currentUser: session.currentUser,
  post
})

const mapDispatchToProps = dispatch => ({
  requestCreateLike: (like) => dispatch(requestCreateLike(like)),
  receivePost: (post) => dispatch(receivePost(post)),
  requestDeleteLike: (id) => dispatch(requestDeleteLike(id)),
  requestDeletePost: (id) => dispatch(requestDeletePost(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailItem))
