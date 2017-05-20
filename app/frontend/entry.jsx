import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as LikesActions from './actions/likes_actions'
import * as LikeApiUtil from './util/likes_api_util'


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

  window.requestCreateLike = LikesActions.requestCreateLike
  window.requestDeleteLike = LikesActions.requestDeleteLike

  ReactDOM.render(<Root store={ store }/>, root)
})
