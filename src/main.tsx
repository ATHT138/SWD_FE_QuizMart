import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './components/ThemeProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
            <App />
          {/* </LocalizationProvider> */}
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
