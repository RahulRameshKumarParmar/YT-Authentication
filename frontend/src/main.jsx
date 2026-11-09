import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContent.jsx'

//Backend URL (Cloud Workspace URL)
// export const server = "https://crispy-meme-pjp44q9w97v4cr6pw-5000.app.github.dev"
//Backend URL (Local Machine URL)
export const server = "http://localhost:5000"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
