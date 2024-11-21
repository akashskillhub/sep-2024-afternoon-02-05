import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return <div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/kahihi' element={<Contact></Contact>} ></Route>
        <Route path='*' element={<h1>Page Not Found 404</h1>} ></Route>
      </Routes>
    </BrowserRouter>

  </div>
}

export default App