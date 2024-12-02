import { Button, TextField } from '@mui/material'
import React from 'react'
import { createIngredientCategory } from '../../component/State/Ingredients/IngAction'
import { useDispatch, useSelector } from 'react-redux'

const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const {restaurant} = useSelector(store=>store)
    const [formData, setFormData] = React.useState({
        name: '',
        
        
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {name:formData.name,restaurantId:restaurant.usersRestaurant.id}
        console.log(data)
        dispatch(createIngredientCategory({data,jwt}))
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...FormData,
            [name]:value
        })
    }
  return (
    <div className='p-5'>
        <h1 className='text-xltext-gray-400 text-center pb-10 '>Create Ingredient Category</h1>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <TextField 
            fullWidth
            id='name'
            name='name'
            label='Category'
            variant='outlined'
            onChange={handleInputChange}
            value={formData.name}>

            </TextField>
           
            <Button type='submit' variant='contained' className='mt-5'>Create Category</Button>
        </form>
      
    </div>
  )
}

export default CreateIngredientCategoryForm
