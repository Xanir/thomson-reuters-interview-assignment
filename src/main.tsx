import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ATM from './atm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ATM />
  </StrictMode>,
)
