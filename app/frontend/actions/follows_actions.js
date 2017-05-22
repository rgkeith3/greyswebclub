import * as FollowsApiUtil from '../util/follows_api_util'

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS'

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
})

export const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
})

export const requestCreateFollow = follow => dispatch => (
  FollowsApiUtil.fetchNewFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)),
      err => dispatch(receiveFollowErrors(err.responseJSON)))
)

export const requestDeleteFollow = id => dispatch => (
  FollowsApiUtil.fetchDestroyFollow(id)
    .then(follow => dispatch(removeFollow(follow)),
      err => dispatc())
)
