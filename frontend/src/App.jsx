import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<SigninPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App