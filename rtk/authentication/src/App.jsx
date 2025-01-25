import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import PublicNavbar from './components/PublicNavbar'
import AdminNavbar from './components/AdminNavbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import Test from './pages/Test'
import Protected from './components/Protected'

const App = () => {
  // return <Test x="dell"> hp </Test>
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<><PublicNavbar /> <Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path='/admin' element={<Protected>
          <> <AdminNavbar /><Outlet /> </>
        </Protected>
        }>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App