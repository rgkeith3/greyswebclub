import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as FollowApiUtil from './util/follows_api_util'


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

  window.fetchDestroyFollow = FollowApiUtil.fetchDestroyFollow
  window.fetchNewFollow = FollowApiUtil.fetchNewFollow

  ReactDOM.render(<Root store={ store }/>, root)
})
