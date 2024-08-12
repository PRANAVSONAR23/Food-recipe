import React from 'react'

import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Favorite from './pages/Favorite.jsx'
import Details from './pages/Details.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App