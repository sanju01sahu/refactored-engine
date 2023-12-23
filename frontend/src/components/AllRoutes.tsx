import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from './NotFound'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default AllRoutes