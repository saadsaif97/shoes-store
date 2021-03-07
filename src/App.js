import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shoes from './components/Shoes'
import ShoesIndex from './components/ShoesIndex'
import SingleShoe from './components/SingleShoe'
import NotFound from './components/NotFound'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Shoe Store</h1>
      <Navbar />
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
