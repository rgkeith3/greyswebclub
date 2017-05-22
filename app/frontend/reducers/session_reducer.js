import merge from 'lodash/merge'

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import { RECEIVE_FOLLOW, RECEIVE_FOLLOW_ERRORS, REMOVE_FOLLOW } from '../actions/follows_actions'

const initState = {
  currentUser: null, errors: []
}

const sessionReducer = (state = initState, action) => {
  Object.freeze(state)
  let nextState = merge({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, initState, {currentUser: action.currentUser})
    case RECEIVE_ERRORS:
      return merge({}, initState, {errors: action.errors})
    case RECEIVE_FOLLOW:
      if (!nextState.currentUser.followees) {
        nextState.currentUser['followees'] = {}
      }
      nextState.currentUser.followees[action.follow.followee_id] = action.follow.id
      return nextState
    case REMOVE_FOLLOW:
      delete nextState.currentUser.followees[action.follow.followee_id]
      return nextState
    case RECEIVE_FOLLOW_ERRORS:
      return merge({}, state, { errors: action.errors })
    default:
      return state
  }
}

export default sessionReducer
