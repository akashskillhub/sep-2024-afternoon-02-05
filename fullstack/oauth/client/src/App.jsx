import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Protected from './components/Protected'
import Layout from './components/Layout'
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/account' element={<Protected> <Layout /> </Protected>}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App