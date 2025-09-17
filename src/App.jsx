import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'

import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';
import Login from './components/Login';
import NavBar from './components/NavBar'; 

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
