import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Todo from './pages/Todo'

import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
  return <>
    <BrowserRouter>
      <ErrorBoundary fallbackRender={e => <h1>Something went wrong</h1>}>
        <Navbar />
      </ErrorBoundary>
      <Routes>
        <Route path='/' element={<ErrorBoundary fallbackRender={e => <h1>Something went wrong</h1>}>
          <Home />
        </ErrorBoundary>} />
        <Route path='/todo' element={<ErrorBoundary fallbackRender={e => <h1>Something went wrong</h1>}>
          <Todo />
        </ErrorBoundary>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App