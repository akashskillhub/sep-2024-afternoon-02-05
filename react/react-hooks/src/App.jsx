import React from 'react'
import LearnUseEffect from './pages/LearnUseEffect'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LearnState from './pages/LearnState'
import LearnUseRef from './pages/LearnUseRef'
import DropBox from './pages/DropBox'
import LearnMemo from './pages/LearnMemo'
import LearnContext from './pages/LearnContext'
import LearnUseReducer from './pages/LearnUseReducer'
import LearnUseCallback from './pages/LearnUseCallback'
import LearnUseMemo from './pages/LearnUseMemo'

const App = () => {
  return <>
    <BrowserRouter>
      <Link to="/">effect</Link>
      <Link to="/state">state</Link>
      <Link to="/ref">ref</Link>
      <Link to="/dropbox">dropbox</Link>
      <Link to="/memo">memo</Link>
      <Link to="/context">context</Link>
      <Link to="/reducer">reducer</Link>
      <Link to="/callback">callback</Link>
      <Link to="/learn-memo">learn-memo</Link>
      <Routes>
        <Route path='/' element={<LearnUseEffect />} />
        <Route path='/state' element={<LearnState />} />
        <Route path='/ref' element={<LearnUseRef />} />
        <Route path='/dropbox' element={<DropBox />} />
        <Route path='/memo' element={<LearnMemo />} />
        <Route path='/context' element={<LearnContext />} />
        <Route path='/reducer' element={<LearnUseReducer />} />
        <Route path='/callback' element={<LearnUseCallback />} />
        <Route path='/learn-memo' element={<LearnUseMemo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App