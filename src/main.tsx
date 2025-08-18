import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProductMainPage from "./ShoppingCartApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
      <ProductMainPage/>
  </StrictMode>,
)
