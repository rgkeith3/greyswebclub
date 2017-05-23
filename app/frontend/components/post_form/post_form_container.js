import { connect } from 'react-redux'

import { requestCreatePost } from '../../actions/posts_actions'
import PostForm from './post_form'

const mapStateToProps = ({ session }) => ({
  user_id: session.currentUser.id
})

const mapDispatchToProps = (dispatch, { match }) => {
  const post_type = match.params.type
  return ({
    requestCreatePost: (post) => dispatch(requestCreatePost(post)),
    post_type
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
