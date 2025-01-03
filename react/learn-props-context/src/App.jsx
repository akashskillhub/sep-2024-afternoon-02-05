import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'

const App = () => {
  return <>
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/test">test</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About users={["john", "ross"]} />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App