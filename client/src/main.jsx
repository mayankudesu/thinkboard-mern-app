import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  </StrictMode>
)
