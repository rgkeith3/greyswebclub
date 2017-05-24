import * as PostsApiUtil from '../util/posts_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_MORE_POSTS = 'RECIEVE_MORE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const removePost = id => ({
  type: REMOVE_POST,
  id
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const requestPosts = (count) => dispatch => (
  PostsApiUtil.fetchPosts(count)
    .then(posts => dispatch(receivePosts(posts)),
      () => dispatch(receivePostErrors(["Couldn't retrieve posts"])))
)

export const requestExplorePosts = (count) => dispatch => (
  PostsApiUtil.fetchExplorePosts(count)
    .then(posts => dispatch(receivePosts(posts)),
      () => dispatch(recievePostErrors(["Couldn't retrieve posts"])))
)

export const requestOnePost = id => dispatch => (
  PostsApiUtil.fetchOnePost(id)
    .then(post => dispatch(receivePost(post)),
      () => dispatch(receivePostErrors(["Couldn't retrieve post"])))
)

export const requestCreatePost = formData => dispatch => {
  return PostsApiUtil.fetchNewPost(formData)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
}

export const requestUpdatePost = post => dispatch => (
  PostsApiUtil.fetchUpdatePost(post)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
)

export const requestDeletePost = id => dispatch => (
  PostsApiUtil.fetchDestroyPost(id)
    .then(() => dispatch(removePost(id)),
      err => dispatch(receivePostErrors(err.responseJSON)))
)
