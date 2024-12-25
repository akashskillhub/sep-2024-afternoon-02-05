import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return <>
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App