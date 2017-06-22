import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className='site-footer'>
    <Link to='/terms'>
      <p>Terms</p>
    </Link>
    <Link to='/privacy'>
      <p>Privacy</p>
    </Link>
    <p>Copyright 2017 Grey Keith</p>
    <Link to='/jobs'>
      <p>Jobs</p>
    </Link>
    <Link to='/support'>
      <p>Support</p>
    </Link>
  </footer>
)

export default Footer
