import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from './pages/Todo'
import PublicNavbar from './components/PublicNavbar'
import AdminNavbar from './components/AdminNavbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <PublicNavbar /> <Outlet /> </>}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/admin' element={<> <AdminNavbar /> <Outlet />  </>}>
          <Route index element={<Todo />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App