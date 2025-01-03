import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import PublicNavbar from './components/PublicNavbar'
import Dashboard from './pages/Dashboard'
import AdminNavbar from './components/AdminNavbar'

const App = () => {
  const [loggedIn, setLoggedIn] = useState()
  const user = "john"
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><PublicNavbar /> <Outlet /> </>}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About loggedIn={loggedIn} />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login setLoggedIn={setLoggedIn} />} />
        </Route>
        <Route path='/admin' element={<> <AdminNavbar loggedIn={loggedIn} data={user} /><Outlet /> </>} >
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App