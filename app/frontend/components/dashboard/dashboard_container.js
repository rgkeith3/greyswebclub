import { connect } from 'react-redux'
import Dashboard from './dashboard'
import { requestPosts, clearPosts } from '../../actions/posts_actions'
import { asArray } from '../../reducers/selectors'

const mapStateToProps = ({ posts, session }) => ({
  currentUser: session.currentUser,
  posts: asArray(posts.posts)
})

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  clearPosts: () => dispatch(clearPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
