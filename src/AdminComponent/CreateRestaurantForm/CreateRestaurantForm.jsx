import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import { uploadImageToCloudinary } from '../Admin/Util/UploadCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../component/State/Restaurant/RestaurantAction';

const initialValues = {
  name: '',
  description: '',
  cuisineType: '',
  streetAddress: '',
  city: '',
  stateProvince: '',
  postalCode: '',
  country: '',
  email: '',
  mobile: '',
  twitter: '',
  instagram: '',
  facebook: '',
  linkedIn: '',
  openingHours: 'Mon-Sun : 9.00AM - 11.00PM',
  images: []
}

export const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postalCode: values.postalCode,
          country: values.country,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,

        },
        openingHours: values.openingHours,
        images: values.images,

      };
      console.log(data);
      dispatch(createRestaurant({data,token:jwt}))

    },
  });
  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("image", updatedImages);

  }
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    formik.setFieldValue("images", [...formik.values.images, image])
    setUploadImage(false)

  }

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
        <h1 className='text-2xl font-bold text-center py-2'>
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Grid container spacing={2}>
            <Grid className='flex flex-wrap gap-5' item xs={12} md={6}>
              <input
                accept='images/*'
                id='fileInput'
                style={{ display: 'none' }}
                type='file'
                onChange={handleImageChange}
              />
              <label className='relative' htmlFor='fileInput'>
                <span className='h-24 w-24 cursor-pointer flex items-center justify-center rounded-md border-gray-600 p-3'>
                  <AddPhotoAlternateIcon className='text-white' />
                </span>
                {
                  uploadImage && (<div className='absolute top-0 right-0 left-0 
                bottom-0 h-24 w-24 flex items-center justify-center'>
                    <CircularProgress />
                  </div>
                  )}
              </label>
              <div className='flex flex-wrap gap-2'>
                {formik.values.images.map((images, index) => (
                  <div className='relative'>
                    <img className='h-24 w-24 object-cover'
                      key={index}
                      src={images} />
                    <IconButton
                      size='small'
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        outline: "none"
                      }}
                      onClick={() => handleRemoveImage(index)}>
                      <CloseIcon sx={{ fontSize: '1rem' }} />

                    </IconButton>
                  </div>))}

              </div>


            </Grid>
            <Grid item xs={12} >
              <TextField fullWidth
                id='name'
                name='name'
                label='Restaurant Name'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>


            </Grid>
            <Grid item xs={12} >
              <TextField fullWidth
                id='description'
                name='description'
                label='Description'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextField>


            </Grid>
            <Grid item xs={12} lg={6} >
              <TextField fullWidth
                id='cuisineType'
                name='cuisineType'
                label='CuisineType'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.cuisineType}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='openingHours'
                name='openingHours'
                label='OpeningHours'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.openingHours}
              ></TextField>
            </Grid>
            <Grid item xs={12} >
              <TextField fullWidth
                id='streetAddress'
                name='streetAddress'
                label='StreetAddress'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              ></TextField>
            </Grid>
            <Grid item xs={12} >
              <TextField fullWidth
                id='city'
                name='city'
                label='City'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.city}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='stateProvince'
                name='stateProvince'
                label='StateProvince'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.stateProvince}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='postalCode'
                name='postalCode'
                label='PostalCode'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='country'
                name='country'
                label='Country'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.country}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='email'
                name='email'
                label='Email'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.email}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='mobile'
                name='mobile'
                label='Mobile'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.mobile}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6} >
              <TextField fullWidth
                id='twitter'
                name='twitter'
                label='twitter'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.twitter}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='instagram'
                name='instagram'
                label='instagram'
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.instagram}
              ></TextField>
            </Grid>
          </Grid>
          <Grid>
            <Button type='submit' variant='contained' color='primary'>Create Restauramt</Button>
          </Grid>



        </form>
      </div>


    </div>
  )
}


