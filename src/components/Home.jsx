import React from 'react'
import GoToShop from './GoToShop'

const Home = () => {
  return (
    <div className='home-card'>
      <h1>👋 Welcome to the shoe store</h1>
      <h3>Beautiful design, lighter than air and extra comfortable.</h3>
      <GoToShop />
      <img src='../shoe.png' alt='shoe' className='home-shoe' />
    </div>
  )
}

export default Home
