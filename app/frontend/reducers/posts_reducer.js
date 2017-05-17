import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/posts_actions'
import merge from 'lodash/merge'

const initState = {
  posts: {},
  errors: ["sup"]
}

const postsReducer = (state = initState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, initState, {posts: action.posts})
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post})
    case REMOVE_POST:
      let nextState = merge({}, state)
      delete nextState[action.post.id]
      return nextState
    case RECEIVE_POST_ERRORS:
      return merge({}, state, {errors: action.errors})
    default:
      return state
  }
}

export default postsReducer
