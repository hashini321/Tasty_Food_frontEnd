import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredient } from '../../component/State/Ingredients/IngAction'

const CreateIngredientsForm = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const {restaurant,ingredients} = useSelector(store=>store)
    const [formData, setFormData] = React.useState({
        name: '',
        categoryId: ''
        
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const data ={
            ...formData,
            restaurantId: restaurant.usersRestaurant.id
        }
        dispatch(createIngredient({data,jwt}))
        console.log(data)
        
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
  return (
    <div className='p-5'>
        <h1 className='text-xltext-gray-400 text-center pb-10 '>Create Ingredient </h1>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <TextField 
            fullWidth
            id='name'
            name='name'
            label='Cusine Type'
            variant='outlined'
            onChange={handleInputChange}
            value={formData.categoryName}>

            </TextField>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.ingredientCategoryId}
                  label="Category"
                  onChange={handleInputChange}
                  name='categoryId'
                >
                  {ingredients.Category.map((item)=> <MenuItem value={item.id}>{item.name}</MenuItem>)}
                 
                </Select>
              </FormControl>
            <Button type='submit' variant='contained' className='mt-5'>Create Ingredient</Button>
        </form>
      
    </div>
  )
}

export default CreateIngredientsForm
