import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/' className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={pathname.includes('about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/shoes'
            className={pathname.includes('shoes') ? 'active' : ''}
          >
            Shoes
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
