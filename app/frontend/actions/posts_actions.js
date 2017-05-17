import * as PostsApiUtil from '../util/posts_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
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

export const removePost = post => ({
  type: REMOVE_POST,
  post
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const requestPosts = () => dispatch => (
  PostsApiUtil.fetchAllPosts()
    .then(posts => dispatch(receivePosts(posts)),
      () => dispatch(receivePostErrors(["Couldn't retrieve posts"])))
)

export const requestOnePost = id => dispatch => (
  PostsApiUtil.fetchOnePost(id)
    .then(post => dispatch(receivePost(post)),
      () => dispatch(receivePostErrors(["Couldn't retrieve post"])))
)

export const requestCreatePost = post => dispatch => (
  PostsApiUtil.fetchNewPost(post)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
)

export const requestUpdatePost = post => dispatch => (
  PostsApiUtil.fetchUpdatePost(post)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
)

export const requestDeletePost = post => dispatch => (
  PostsApiUtil.fetchDestroyPost(post.id)
    .then(() => dispatch(removePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
)
