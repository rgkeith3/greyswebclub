import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import merge from 'lodash/merge'

const initState = {
  currentUser: null, errors: []
}

const sessionReducer = (state = initState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, initState, {currentUser: action.currentUser})
    case RECEIVE_ERRORS:
      return merge({}, initState, {errors: action.errors})
    default:
      return state
  }
}

export default sessionReducer
