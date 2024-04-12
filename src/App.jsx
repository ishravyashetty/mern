import { BrowserRouter, Routes, Route } from 'react-router-dom'


import React from 'react'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Blogs from './pages/Blogs'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/blogs' element={<Blogs/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App