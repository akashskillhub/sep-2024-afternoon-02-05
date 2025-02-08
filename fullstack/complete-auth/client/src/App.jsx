import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Protected from './component/Protected'

const App = () => {
  return <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/admin' element={<Protected> <Dashboard /> </Protected>} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App