import React from 'react'
import { Home } from './Pages/Home'
import {  Register} from './Pages/Register'
import { Login} from './Pages/Login'
import { Page404 } from './Pages/Page404'
import { Route, Routes } from 'react-router-dom'

 const App = () => {
  return (

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={< Register />} />
    <Route path="*" element={<Page404/>} />
    
    </Routes>

  )
}
export default App;