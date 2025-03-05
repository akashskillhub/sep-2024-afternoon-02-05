import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/PublicLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'
import UserLayout from './components/UserLayout'
import UserAccount from './pages/UserAccount'
import AdminLayout from './components/AdminLayout'
import AdminUsers from './pages/AdminUsers'
import AdminBlogs from './pages/AdminBlogs'
import AdminLogin from './pages/AdminLogin'

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import UserProtected from './components/UserProtected'
import AdminProtected from './components/AdminProtected'
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>

        <Route path='/user' element={<UserProtected> <UserLayout /> </UserProtected>}>
          <Route index element={<UserAccount />} />
        </Route>

        <Route path='/admin' element={<AdminProtected> <AdminLayout /> </AdminProtected>}>
          <Route index element={<AdminUsers />} />
          <Route path="blogs" element={<AdminBlogs />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App