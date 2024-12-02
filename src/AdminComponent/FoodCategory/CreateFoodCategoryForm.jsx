import { Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../component/State/Restaurant/RestaurantAction';

const CreateFoodCategoryForm = () => {
  const {restaurant} = useSelector((store) => store);
  const dispatch = useDispatch();
    const [FormData, setFormData] = React.useState({
        categoryName: '',
        restaurantId: ''
        
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            name: FormData.categoryName,
            restaurantId: {
                id: 1
            }
        }
        dispatch(createCategoryAction({reqData: data, jwt:localStorage.getItem('jwt')}))
        console.log(data)
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
        <h1 className='text-xltext-gray-400 text-center pb-10 '>Create Food Category</h1>
        <form onSubmit={handleSubmit} className='space-y-5'>
            <TextField 
            fullWidth
            id='categoryName'
            name='categoryName'
            label='Food Category'
            variant='outlined'
            onChange={handleInputChange}
            value={FormData.categoryName}>

            </TextField>
            <Button type='submit' variant='contained' className='mt-5'>Create Category</Button>
        </form>
      
    </div>
  )
}

export default CreateFoodCategoryForm
