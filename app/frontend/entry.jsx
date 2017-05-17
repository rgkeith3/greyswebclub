import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as PostsActions from './actions/posts_actions'


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

  window.requestPosts = PostsActions.requestPosts
  window.requestCreatePost = PostsActions.requestCreatePost
  window.requestOnePost = PostsActions.requestOnePost
  window.requestUpdatePost = PostsActions.requestUpdatePost
  window.requestDestroyPost = PostsActions.requestDestroyPost

  ReactDOM.render(<Root store={ store }/>, root)
})
