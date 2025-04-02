import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App, { StateContext } from './App.jsx'
import { Provider } from "react-redux"
import reduxStore from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={reduxStore}>
      <StateContext.Provider value={{ dummy: "dell", setDummy: () => { } }}>
        <Suspense fallback={<h1>Loading....</h1>}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </StateContext.Provider>
    </Provider>
  </GoogleOAuthProvider>
  ,
)
