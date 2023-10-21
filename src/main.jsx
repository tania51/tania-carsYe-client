import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider/AuthProvider'
import FetchAllCars from './components/FetchAllCars/FetchAllCars'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FetchAllCars>
        <Routes></Routes>
      </FetchAllCars>
    </AuthProvider>
  </React.StrictMode>,
)
