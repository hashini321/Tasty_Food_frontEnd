import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../Cart/Cart';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Auth = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const handleOnclose=()=>{
    navigate("/")
  }
  return (
    <>
        <Modal onClose={handleOnclose} open={ 
          location.pathname==="/account/register"
          || location.pathname==="/account/login"
          
        }>
          <Box sx={style}>

            {location.pathname==="/account/register"?<RegistrationForm/>:<LoginForm/> }

          </Box>

        </Modal>

    </>
  )
}

export default Auth