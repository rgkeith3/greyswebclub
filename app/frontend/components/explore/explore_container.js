import { connect } from 'react-redux'
import Explore from './explore'
import { requestExplorePosts, clearPosts } from '../../actions/posts_actions'
import { asArray } from '../../reducers/selectors'

const mapStateToProps = ({ posts, session }) => ({
  currentUser: session.currentUser,
  posts: asArray(posts.posts)
})

const mapDispatchToProps = dispatch => ({
  requestExplorePosts: (count) => dispatch(requestExplorePosts(count)),
  clearPosts: () => dispatch(clearPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore)
