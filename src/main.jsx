import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Note: StrictMode disabled to prevent double-mount issues with lightweight-charts
// Re-enable in production or when the library supports it
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
