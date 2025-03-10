import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/public/PublicLayout'
import Home from './pages/public/Home'
import Details from './pages/public/Details'
import SellerLogin from './pages/public/SellerLogin'
import SellerRegister from './pages/public/SellerRegister'
import UserLogin from './pages/public/UserLogin'
import AdminLogin from './pages/public/AdminLogin'
import Cart from './pages/public/Cart'
import Checkout from './pages/public/Checkout'
import Success from './pages/public/Success'
import Loading from './components/share/Loading'
import { ToastContainer } from 'react-toastify'
import SellerProtected from './components/seller/SellerProtected'
import SellerLayout from './components/seller/SellerLayout'
import SellerProducts from './pages/seller/SellerProducts'
import SellerProfile from './pages/seller/SellerProfile'
import AdminProtected from './components/admin/AdminProtected'
import AdminLayout from './components/admin/AdminLayout'
import AllSellers from './pages/admin/AllSellers'
import AllProducts from './pages/admin/AllProducts'
import AllUsers from './pages/admin/AllUsers'
import AllOrders from './pages/admin/AllOrders'
import UserProtected from './components/user/UserProtected'
import UserLayout from './components/user/UserLayout'
import OrderHistory from './pages/user/OrderHistory'
import UserProfile from './pages/user/UserProfile'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='details/:pid' element={<Details />} />
          <Route path='seller-login' element={<SellerLogin />} />
          <Route path='seller-register' element={<SellerRegister />} />
          <Route path='user-login' element={<UserLogin />} />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<UserProtected> <Checkout /> </UserProtected>} />
          <Route path='success' element={<UserProtected><Success /> </UserProtected>} />
        </Route>

        <Route path='/seller' element={<SellerProtected> <SellerLayout /> </SellerProtected>}>
          <Route index element={<SellerProducts />} />
          <Route path='profile' element={<SellerProfile />} />
        </Route>

        <Route path='/admin' element={<AdminProtected> <AdminLayout /> </AdminProtected>}>
          <Route index element={<AllSellers />} />
          <Route path='products' element={<AllProducts />} />
          <Route path='users' element={<AllUsers />} />
          <Route path='orders' element={<AllOrders />} />
        </Route>

        <Route path='/user' element={<UserProtected> <UserLayout /> </UserProtected>}>
          <Route index element={<OrderHistory />} />
          <Route path='profile' element={<UserProfile />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App