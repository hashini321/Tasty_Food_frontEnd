import React from 'react'
import { Button, Card } from '@mui/material'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16'
            src='https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg' alt=''></img>
        
        <div>
            <p>Burger</p>
            <p>Rs:1200/-</p>
        </div>
        </div>
        <div>
            <Button variant='contained' className='cursor-not-allowed'>Completed</Button>
        </div>

    </Card>
  )
}

export default OrderCard