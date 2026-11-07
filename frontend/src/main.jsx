import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Backend URL (Change it when working on local machine)
export const server = "https://crispy-meme-pjp44q9w97v4cr6pw-5000.app.github.dev/"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
