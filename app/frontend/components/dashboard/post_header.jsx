import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="post-links">
    <Link to='/new/txt'>
      <i className='fa fa-font fa-lg'>
      </i>
    </Link>
    <Link to='/new/pic'>
      <i className='fa fa-picture-o fa-lg'></i>
    </Link>
    <Link to='/new/url'>
      <i className='fa fa-link fa-lg'></i>
    </Link>
    <Link to='/new/aud'>
      <i className='fa fa-music fa-lg'></i>
    </Link>
    <Link to='/new/vid'>
      <i className='fa fa-film fa-lg'></i>
    </Link>
  </div>
)
