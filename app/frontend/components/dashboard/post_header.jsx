import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="post-header">
    <Link to='/new/txt'>
      txt
    </Link>
    <Link to='/new/pic'>
      pic
    </Link>
    <Link to='/new/lnk'>
      lnk
    </Link>
    <Link to='/new/aud'>
      aud
    </Link>
    <Link to='/new/vid'>
      vid
    </Link>
  </div>
)
