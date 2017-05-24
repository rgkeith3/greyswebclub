import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as FollowApiUtil from './util/follows_api_util'


import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = "rgb(255, 244, 242)"
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

// document.addEventListener('scroll', () => {
//   let scroll = document.body.scrollTop
//
//   let red = parseInt(255 - (255 * (scroll / 30000)))
//   let green = parseInt(244 - (244 * (scroll / 30000)))
//   let blue = parseInt(242 - (242 * (scroll / 30000)))
//
//   let color = "rgb(" + red + ", " + green + ", " + blue + ")"
//
//   document.body.style.backgroundColor = color
// })
