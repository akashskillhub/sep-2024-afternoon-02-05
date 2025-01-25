import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PublicLayout from './components/PublicLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Protected from './components/Protected'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='/admin' element={<Protected> <AdminLayout /> </Protected>}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App