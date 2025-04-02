import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import { ToastContainer } from "react-toastify"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App