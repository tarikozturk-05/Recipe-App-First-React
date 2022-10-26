import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<PrivateRouter/>}>
            <Route path='' element={<Home/>}/>
        </Route>

        <Route path='/details' element={<PrivateRouter/>}>
            <Route path='' element={<Details/>}/>
        </Route>

        <Route path='/about' element={<PrivateRouter/>}>
            <Route path='' element={<About/>}/>
        </Route>
      



    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter