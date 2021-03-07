import React from 'react'
import { Outlet } from 'react-router-dom'

const Shoes = () => {
  return (
    <div>
      <h1>Shoes</h1>
      <hr />
      <Outlet />
    </div>
  )
}

export default Shoes
