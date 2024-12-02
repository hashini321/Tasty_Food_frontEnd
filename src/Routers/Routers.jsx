import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRouters from './CustomerRouters'

const Routers = () => {
  return (
   <Routes>
    <Route path='/admin/restaurant/*' element={<AdminRoute />}></Route>
    <Route path='/*' element={<CustomerRouters/>}></Route>
   </Routes>
  )
}

export default Routers
