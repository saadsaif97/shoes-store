import Home from './components/Home'
import About from './components/About'
import Shoes from './components/Shoes'
import ShoesIndex from './components/ShoesIndex'
import SingleShoe from './components/SingleShoe'
import NotFound from './components/NotFound'

import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div>
      <h1>Hi from app</h1>
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
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shoes' element={<Shoes />}>
            <Route path='/' element={<ShoesIndex />} />
            <Route path=':slug' element={<SingleShoe />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
