import React from 'react'
import './css/App.css'

import NavBar from './components/NavBar'; 
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="app-container">
          <AppRoutes />
        </div>
      </div>
    </>
  )
}

export default App
