import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from "./styles/GlobalStyles.js"
import router from './routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </StrictMode>,
)

