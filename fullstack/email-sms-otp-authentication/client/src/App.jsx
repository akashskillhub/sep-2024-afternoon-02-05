import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminNavbar from './components/AdminNavbar'

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Protected from './components/Protected'
const App = () => {
  return <>
    <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin' element={<Protected><AdminNavbar /><Outlet /></Protected>}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App