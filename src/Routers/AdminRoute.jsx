import React from 'react'
import {Admin }from '../AdminComponent/Admin/Admin'
import { Route, Routes } from 'react-router-dom'
import { CreateRestaurantForm } from '../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import { useSelector } from 'react-redux'
const AdminRoute = () => {
  const {restaurant} = useSelector(store=>store)

  return (
    <div>
      <Routes>
        <Route path='/*' element={!restaurant.usersRestaurant?<CreateRestaurantForm/>:<Admin/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRoute
