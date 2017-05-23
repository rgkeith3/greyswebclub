import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="post-links">
    <Link to='dashboard/new/txt'>
      <i className='fa fa-font fa-lg'>
      </i>
    </Link>
    <Link to='dashboard/new/pic'>
      <i className='fa fa-picture-o fa-lg'></i>
    </Link>
    <Link to='dashboard/new/url'>
      <i className='fa fa-link fa-lg'></i>
    </Link>
    <Link to='dashboard/new/aud'>
      <i className='fa fa-music fa-lg'></i>
    </Link>
    <Link to='dashboard/new/vid'>
      <i className='fa fa-film fa-lg'></i>
    </Link>
  </div>
)
