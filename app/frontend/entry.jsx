import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {requestSearch, clearSearch} from './actions/search_actions'


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

  ReactDOM.render(<Root store={ store }/>, root)
})

document.addEventListener('scroll', () => {
  let scroll = document.body.scrollTop

  // let red = parseInt(255 - (255 * (scroll / 30000)))
  // let green = parseInt(244 - (244 * (scroll / 30000)))
  // let blue = parseInt(242 - (242 * (scroll / 30000)))
  //
  // let color = "rgb(" + red + ", " + green + ", " + blue + ")"

  let opacity = (scroll / 30000).toString()

  let grad = document.getElementById('gradient')

  grad.style.opacity = opacity
})
