/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import NewIncrement from './NewIncrement.jsx'


createRoot(document.getElementById('root')).render(
   <StrictMode>
  <App />
</StrictMode>
)
