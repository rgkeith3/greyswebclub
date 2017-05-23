import { connect } from 'react-redux'
import Explore from './explore'
import { requestAllPosts } from '../../actions/posts_actions'
import { asArray } from '../../reducers/selectors'

const mapStateToProps = ({ posts, session }) => ({
  currentUser: session.currentUser,
  posts: asArray(posts.posts)
})

const mapDispatchToProps = dispatch => ({
  requestAllPosts: () => dispatch(requestAllPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore)
