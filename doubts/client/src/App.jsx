import React, { createContext, lazy, Suspense, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
const Learn_jsx = lazy(() => import("./pages/Learn_jsx"))
const Learn_state = lazy(() => import('./pages/Learn_state'))
const Layout = lazy(() => import('./components/Layout'))
const LearnEffect = lazy(() => import('./pages/LearnEffect'))
const Learn_Debounce = lazy(() => import('./pages/Learn_Debounce'))
const Learn_loops = lazy(() => import('./pages/Learn_loops'))
const Learn_props = lazy(() => import('./pages/Learn_props'))
const Demo = lazy(() => import('./pages/Demo'))
const Learn_clsx = lazy(() => import('./pages/Learn_clsx'))
const Learn_Redux_actions = lazy(() => import('./pages/Learn_Redux_actions'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Protected = lazy(() => import('./components/Protected'))


import { ErrorBoundary } from "react-error-boundary"
import OAuth from './pages/OAuth'
const Learnref = lazy(() => import('./pages/Learnref'))
export const StateContext = createContext()
const App = () => {
  const location = useLocation()
  const [dummy, setDummy] = useState()
  const ErrorFeedback = () => {
    return <div>
      <h1>something went wrong</h1>
    </div>
  }
  return <>
    <Routes>
      <Route path='/' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}> <Layout /> </ErrorBoundary>}>
        <Route index element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_jsx /></ErrorBoundary>} />
        <Route path='state' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_state /></ErrorBoundary>} />
        <Route path='effect' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><LearnEffect /></ErrorBoundary>} />
        <Route path='debounce' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_Debounce /></ErrorBoundary>} />
        <Route path='loop' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_loops /></ErrorBoundary>} />
        <Route path='props' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_props /></ErrorBoundary>} />
        <Route path='demo' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Demo /></ErrorBoundary>} />
        <Route path='clsx' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_clsx /></ErrorBoundary>} />
        <Route path='actions' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learn_Redux_actions /></ErrorBoundary>} />

        <Route path='register' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Register /></ErrorBoundary>} />
        <Route path='login' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Login /></ErrorBoundary>} />
        <Route path='account' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Protected> <Dashboard /> </Protected></ErrorBoundary>} />
        <Route path='ref' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Learnref /></ErrorBoundary>} />
        <Route path='oauth' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><OAuth /></ErrorBoundary>} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </>
}

export default App