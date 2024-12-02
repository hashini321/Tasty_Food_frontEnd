import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../component/State/Restaurant/RestaurantAction';

export const RestaurantDetails = () => {
  const {restaurant} = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("Restaurant Details",restaurant);
  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus({
      restaurantId:restaurant.usersRestaurant?.id,
      jwt:localStorage.getItem('jwt'),
    }))
    
  }
  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>{restaurant.usersRestaurant?.name}</h1>

      <div>
       <Button className=' px-[2rem] py-[1rem] rounded-md' color={!restaurant.usersRestaurant?.open?'primary':'error'}
       variant='contained' onClick={handleRestaurantStatus} size='l4arge'>
        {restaurant.usersRestaurant?.open?'Close':'Open'}
       </Button>
      </div>
      


    </div>
    <Grid  container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
          <CardContent >
            <div className='space-y-5  text-gray-100'>
              <div className='flex'>
                <p className='w-48'>Owner</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.owner.fullName}
                </p>

              </div>
              
              <div className='flex'>
                <p className='w-48'>Resauran Name</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.name}
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Cuisine Type</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.cuisineType}
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Opening Hours</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.openingHours}
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Status</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.open?<span className='bg-green-500 px-5 py-3 rounded-full text-gray-950'>Open</span>
                  :<span className='bg-red-500 px-5 py-3 rounded-full text-gray-950'>Closed</span>}
                </p>

              </div>

            </div>
          </CardContent>
                    
          
        </Card>


      </Grid>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title={<span className='text-gray-300'>Address</span>} />
          <CardContent >
            <div className='space-y-5  text-gray-100'>
              <div className='flex'>
                <p className='w-48'>County</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                   Sri Lanka
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>City</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                   Colombo
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Posal Code</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                   Chef Hashi
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Sate Address</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                   Chef Hashi
                </p>

              </div>
              

            </div>
          </CardContent>
                    
          
        </Card>


      </Grid>
      <Grid item xs={12} lg={6}> 
        <Card>
          <CardHeader title={<span className='text-gray-300'>Contact</span>} />
          <CardContent >
            <div className='space-y-5  text-gray-100'>
              <div className='flex'>
                <p className='w-48'>Email</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.contactInformation?.email}
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Mobile</p>
                <p className='text-gray-300'>
                  <span className='pr-5 '>-</span>
                  {restaurant.usersRestaurant?.contactInformation?.mobile}
                </p>

              </div>
              <div className='flex'>
                <p className='w-48'>Social</p>
                <div className='flex  text-gray-300 items-center pb-3 gap-2'>
                  <span className='pr-5 '>-</span>
                  <a href={restaurant.usersRestaurant?.contactInformation?.instagram} ><InstagramIcon sx={{ fontSize: "3rem"}}/></a>

                  <a href={restaurant.usersRestaurant?.contactInformation?.twitter} ><TwitterIcon sx={{ fontSize: "3rem"}}/></a>

                  <a href={restaurant.usersRestaurant?.contactInformation?.linkedIn} ><LinkedInIcon sx={{ fontSize: "3rem"}}/></a>

                  <a href={restaurant.usersRestaurant?.contactInformation?.facebook} ><FacebookIcon sx={{ fontSize: "3rem"}}/></a>
                </div>

              </div>
             

            </div>
          </CardContent>
                    
          
        </Card>


      </Grid>
    </Grid>    
    </div>
  )
}


