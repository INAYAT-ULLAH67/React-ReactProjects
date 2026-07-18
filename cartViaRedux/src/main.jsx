import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Import the Provider from react-redux
import { Provider } from 'react-redux'
// 2. Import your store with the correct capitalized path
import { store } from './app/Store.js' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap your App inside the Provider so Redux works everywhere */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)