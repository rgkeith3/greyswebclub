import { connect } from 'react-redux'

import { requestCreatePost } from '../../actions/posts_actions'
import PostForm from './post_form'

const mapStateToProps = ({ session }) => ({
  user_id: session.currentUser.id
})

const mapDispatchToProps = (dispatch, { location }) => {
  const post_type = location.pathname.slice(5)
  return ({
    requestCreatePost: (post) => dispatch(requestCreatePost(post)),
    post_type
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
