import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}> 
            <CardMedia 
            sx={{height:345}}
            image='https://cdn.pixabay.com/photo/2016/11/23/17/56/wedding-1854074_1280.jpg'/>
            <CardContent>
                <Typography variant='h5' >
                    SriLanka Fast Food
                </Typography>
                <Typography variant='body2' >
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p className='text-gray-500'>{"Colombo"}</p>
                    <p>{"SriLanka"}</p>
                    <p className='text-sm text-blue-500'>Octomber 04, 2024 12:00AM</p>
                    <p className='text-sm text-red-500'>Octomber 14, 2024 12:00AM</p>
                </div>
            </CardContent>
                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard