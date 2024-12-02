import { Box, Button, Grid, Modal, TextField, } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '../../component/State/Restaurant/RestaurantAction';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image: '',
  location:'',
  name:'',
  startedAt:dayjs(),
  endsAt:dayjs(),

}

export const Events = () => {

  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const {restaurant} = useSelector(store=>store)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValue, SetFormValue] = React.useState(initialValues)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createEvent({data:formValue, restaurantId:restaurant.usersRestaurant?.id, jwt}))
    console.log("submitted",formValue)
    SetFormValue(initialValues)
    handleClose()

  }

  const handleFormChange = (e) => {
    SetFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })  
  }

  const handleDateChange = (date,dateType) => {
    //const formatedDate=dayjs(date).format('MM/DD/YYYY hh:mm a')
    SetFormValue({
      ...formValue,
      [dateType]: date

    })
  }

  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} className='pb-5'>
                <Grid item xs={12}>
                  <TextField
                    name='image'
                    label='Image URL'
                    variant='outlined'
                    fullWidth
                    value={formValue.image}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='location'
                    label='Location'
                    variant='outlined'
                    fullWidth
                    value={formValue.location}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='name'
                    label='Event Name'
                    variant='outlined'
                    fullWidth
                   value={formValue.name}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Start Date and Time"
                      value={formValue.startedAt}
                      onChange={(newValue) => 
                        handleDateChange(newValue, 'startedAt')
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{ width: '100%' }}
                    />
                  
                  </LocalizationProvider>
                   

                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="End Date and Time"
                      //value={formValue.endsAt}
                      onChange={(newValue) => 
                        handleDateChange(newValue, 'endsAt')
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{ width: '100%' }}
                    />
                  </LocalizationProvider>
                </Grid>

              </Grid>
              <Button type='submit'  variant='contained' color='primary'>Submit</Button>

            </form>
            
          </Box>
        </Modal>
      </div>

    </div>
  )
}

