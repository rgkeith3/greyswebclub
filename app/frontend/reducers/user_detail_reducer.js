import { RECEIVE_USER_DETAIL, RECEIVE_USER_DETAIL_ERRORS, CLEAR_USER_DETAIL } from '../actions/user_detail_actions'
import merge from 'lodash/merge'

const initState = {
  userDetail: {},
  errors: []
}

const userDetailReducer = (state = initState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return merge({}, initState, { userDetail: action.user })
    case RECEIVE_USER_DETAIL_ERRORS:
      return merge({}, initState, { errors: action.errors})
    case CLEAR_USER_DETAIL:
      return merge({}, initState)
    default:
      return state
  }
}

export default userDetailReducer
