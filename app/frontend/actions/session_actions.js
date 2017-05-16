import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = user => dispatch => (
  SessionApiUtil.loginUser(user)
    .then(userRes => dispatch(receiveCurrentUser(userRes)),
      err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  SessionApiUtil.logoutUser()
    .then(() => dispatch(receiveCurrentUser(null)),
      err => dispatch(receiveErrors(err.responseJSON)))
)

export const signup = user => dispatch => (
  SessionApiUtil.signUpUser(user)
    .then(userRes => dispatch(receiveCurrentUser(userRes)),
      err => dispatch(receiveErrors(err.responseJSON)))
)
