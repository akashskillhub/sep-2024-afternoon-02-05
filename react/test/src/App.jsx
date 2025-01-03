import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  return <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App