import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



import { Provider } from "./components/ui/provider.jsx"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
