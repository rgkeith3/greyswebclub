import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/posts_actions'
import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKE_ERRORS } from '../actions/likes_actions'
import merge from 'lodash/merge'

const initState = {
  posts: {},
  errors: []
}

const postsReducer = (state = initState, action) => {
  Object.freeze(state)
  let nextState = merge({}, state)
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, { posts: action.posts })
    case RECEIVE_POST:
      return merge({}, state, { posts: { [action.post.id]: action.post }})
    case REMOVE_POST:
      delete nextState.posts[action.id]
      return nextState
    case RECEIVE_POST_ERRORS:
      return merge({}, state, { errors: action.errors })
    case RECEIVE_LIKE:
      if (!nextState.posts[action.like.post_id].likers) {
        nextState.posts[action.like.post_id]['likers'] = {}
      }
      nextState.posts[action.like.post_id].likers[action.like.user_id] = action.like.id
      return nextState
    case REMOVE_LIKE:
      delete nextState.posts[action.like.post_id].likers[action.like.user_id]
      return nextState
    case RECEIVE_LIKE_ERRORS:
      return merge({}, state, { errors: action.errors})
    default:
      return state
  }
}

export default postsReducer
