import Home from './components/Home'
import About from './components/About'
import Shoes from './components/Shoes'
import ShoesIndex from './components/ShoesIndex'
import SingleShoe from './components/SingleShoe'
import NotFound from './components/NotFound'

import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Hi from app</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/shoes'>Shoes</NavLink>
        </li>
      </ul>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shoes' element={<Shoes />}>
            <Route to='/' element={<ShoesIndex />} />
            <Route to='/:slug' element={<SingleShoe />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
