import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as BrowserRouter } from 'react-router-dom'

// 1. Importa el CSS de Bootstrap PRIMERO
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. Importa tu CSS personalizado DESPUÉS
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)