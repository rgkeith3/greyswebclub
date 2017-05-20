import * as LikesApiUtil from '../util/likes_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS'

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
})

export const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
})

export const requestCreateLike = like => dispatch => {
  return LikesApiUtil.fetchNewLike(like)
    .then(like => dispatch(receiveLike(like)),
      err => dispatch(receiveLikeErrors(err.responseJSON)))
}

export const requestDeleteLike = like => dispatch => {
  return LikesApiUtil.fetchDestroyLike(like.id)
    .then(() => dispatch(removeLike(like)),
      err => dispatch(receiveLikeErrors(err.responseJSON)))
}
