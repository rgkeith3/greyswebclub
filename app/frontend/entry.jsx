import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as PostsApiUtil from './util/posts_api_util'


import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }}
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }
  const root = document.getElementById('root')

  window.store = store

  window.fetchAllPosts = PostsApiUtil.fetchAllPosts
  window.fetchNewPost = PostsApiUtil.fetchNewPost
  window.fetchOnePost = PostsApiUtil.fetchOnePost
  window.fetchUpdatePost = PostsApiUtil.fetchUpdatePost
  window.fetchDestroyPost = PostsApiUtil.fetchDestroyPost

  ReactDOM.render(<Root store={ store }/>, root)
})
