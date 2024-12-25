import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LearnBackground from './page/LearnBackground'
import LearnSpacing from './page/LearnSpacing'
import LearnState from './page/LearnState'
import LearnResponsive from './page/LearnResponsive'
import LearnDarkMode from './page/LearnDarkMode'

const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LearnDarkMode />} />
        <Route path='/rwd' element={<LearnResponsive />} />
        <Route path='/state' element={<LearnState />} />
        <Route path='/spacing' element={<LearnSpacing />} />
        <Route path='/bg' element={<LearnBackground />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  </div>
}

export default App