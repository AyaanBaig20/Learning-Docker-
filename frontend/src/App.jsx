import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './auth/pages/Signup'
import Login from './auth/pages/Login'
import Home from './auth/pages/Home'
import Loading from './auth/pages/Loading'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
