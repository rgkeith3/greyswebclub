import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => (
  <div className='welcome'>
    <div className='club-pic'/>
    <div className='pane title'>
      <h1>Grey's Web Club</h1>
      <h2>The V.I.P. section of the internet</h2>
    </div>
    <div className='pane about'>
      <h1>So what is Grey's Web Club?</h1>
      <p>Do you feel overwhelmed by current social media platforms?</p>
      <p>Feel like the tweet is more important than the characters?</p>
      <p>Feel like the book is more important than the face?</p>
    </div>
    <div className='pane club'>
      <h1>Welcome to the Club</h1>
    </div>
    <p>If you're tired of the same old social media platforms, join a place that makes the content, not the medium, the message</p>
    <p>I created this web club for friends to come together and share content to their hearts desire</p>
    <div className='pane call-to-action'>
      <h1>So, What are you waiting for?</h1>
      <div className='explore-button'>
        <Link to='/explore'>
          <h2>Explore</h2>
        </Link>
      </div>
      <div className='welcome-links'>
        <Link to='/signup'>
          <h2>Sign Up</h2>
        </Link>
        <Link to='/login'>
          <h2>Login</h2>
        </Link>
      </div>
    </div>
  </div>
)

export default Welcome
