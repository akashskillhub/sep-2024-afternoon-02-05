import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App