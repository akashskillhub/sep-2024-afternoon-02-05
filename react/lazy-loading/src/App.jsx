import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigation } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Navbar from './components/Navbar'

import { ErrorBoundary } from "react-error-boundary"
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Home = lazy(() => import("./pages/Home"))
const Navbar = lazy(() => import("./components/Navbar"))

const ErrorFallback = ({ error, resetErrorBoundary }) => {

  return <>
    <h1>{error.message}</h1>
    <button onClick={resetErrorBoundary}>retry</button>
  </>
}


const App = () => {
  const lcoation = useLocation()
  console.log(lcoation)

  const Fallback = () => <h1>Loading...</h1>

  const ALL_ROUTES = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]
  return <>
    <>
      <Suspense fallback={<Fallback />}>
        <Navbar />
      </Suspense>
      <Routes>
        {
          ALL_ROUTES.map(item => <Route
            path={item.path}
            element={
              <ErrorBoundary resetKeys={[lcoation.pathname]} FallbackComponent={ErrorFallback}>
                <Suspense fallback={<Fallback />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>
            }
          />)
        }
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>









    {/* <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Navbar />
      </Suspense>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<Fallback />}>
            <About />
          </Suspense>
        } />
        <Route path='/contact' element={
          <Suspense fallback={<Fallback />}>
            <Contact />
          </Suspense>
        } />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter> */}

  </>
}

export default App