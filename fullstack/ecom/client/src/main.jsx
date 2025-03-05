import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import reduxStore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </>,
)
