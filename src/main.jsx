import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import RecipeProvider from './context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    
   
    <RecipeProvider>
    <App/>
    </RecipeProvider>
    
    
    
  </StrictMode>
  </BrowserRouter>,
)
