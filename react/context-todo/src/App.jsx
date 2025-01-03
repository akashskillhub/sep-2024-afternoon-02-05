import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from './pages/Todo'
import Navbar from './components/Navbar'

export const AuthContext = createContext()
const App = () => {
  const [allTodos, setAllTodos] = useState([])
  const [loggedIn, setLoggedIn] = useState()
  return <AuthContext.Provider value={{ loggedIn, setLoggedIn, allTodos, setAllTodos }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App