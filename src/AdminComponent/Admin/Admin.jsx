import React, { useEffect } from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Orders } from '../Orders/Orders'
import { RestaurantDashboard } from '../Dashboard/Dashboard'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import { Details } from '../Details/Details'
import { CreateMenuForm } from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../component/State/Restaurant/RestaurantAction'
import { getMenuItemsByRestaurantId } from '../../component/State/Menu/MenuAction'
import { fetchRestaurantsOrder } from '../../component/State/Restaurant Order/RestaurantOrderAction'





export const Admin = () => {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem('jwt')
  const {restaurant}=useSelector(store=>store)
  const handleClose=()=>{

  }
  useEffect(()=>{
    dispatch(getRestaurantsCategory({
      jwt,
      restaurantId:restaurant.usersRestaurant?.id,

    }));
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurantId:restaurant.usersRestaurant?.id,
      
    }))
    
    
  },[]
  )
  return (
    <div>
      <div className='lg:flex justify-between '>
        <div>
            <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<RestaurantDashboard/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/category' element={<FoodCategory/>}/>
            <Route path='/ingredients' element={<Ingredients/>}/> 
            <Route path='/events' element={<Events/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/add-menu' element={<CreateMenuForm/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

