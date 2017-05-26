import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PostShow from './post_show'
import { requestOnePost, clearPosts } from '../../actions/posts_actions'

const mapStateToProps = ({ session, posts }, { match }) => ({
  currentUser: session.currentUser,
  postId: match.params.id,
  posts
})

const mapDispatchToProps = dispatch => ({
  requestOnePost: (id) => dispatch(requestOnePost(id)),
  clearPosts: () => dispatch(clearPosts())
})
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow))
