import { fetchUserDetail } from '../util/user_detail_api_util'

export const RECEIVE_USER_DETAIL = 'RECEIVE_USER_DETAIL'
export const RECEIVE_USER_DETAIL_ERRORS = 'RECEIVE_USER_DETAIL_ERRORS'
export const CLEAR_USER_DETAIL = 'CLEAR_USER_DETAIL'

export const receiveUserDetail = user => ({
  type: RECEIVE_USER_DETAIL,
  user
})

export const clearUserDetail = () => ({
  type: CLEAR_USER_DETAIL,
})

export const receiveUserDetailErrors = () => ({
  type: RECEIVE_USER_DETAIL_ERRORS,
  errors: ["Couldn't retrieve user"]
})

export const requestUserDetail = (id) => dispatch => (
  fetchUserDetail(id)
    .then(user => dispatch(receiveUserDetail(user)),
      () => dispatch(receiveUserDetailErrors()))
)
