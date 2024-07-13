import { ShoppingBag } from '@mui/icons-material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authontication/Action';


const menu =[
    {title: "Orders", icon:<ShoppingBagIcon/>},
    {title: "Favorites", icon:<FavoriteIcon/>},
    {title: "Address", icon:<HomeIcon/>},
    {title: "Payments", icon:<AccountBalanceWalletIcon/>},
    {title: "NotifiCation", icon:<NotificationsIcon/>},
    {title: "Events", icon:<InsertInvitationIcon/>},
    {title: "Logout", icon:<LogoutIcon/>},
]
const ProfileNavigation = (open,handleClose) => {
    const isSmallScreen = useMediaQuery('(mix-width:900px)');
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleNavigate=(item)=>{
      if(item.title === "Logout"){
        dispatch(logout());
        navigate("/")

      }
      else{
      navigate(`/my-profile/${item.title.toLowerCase()}`)
      }

    }
    
  return (
    <div>
        <Drawer 
        variant={"permanent"} 
        // onClose={handleClose} 
        open={true} 
        anchor='left' 
        sx={{zIndex: 1}}>
        
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-x1 
        gap-8 pt-16'>
          {menu.map((item,i)=><>
            <div onClick={()=>handleNavigate(item)} className='px-5 flex item-center space-x-5 cursor-pointer'>
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i!== menu.length-1 && <Divider/>}
          
          </>)}

        </div>
        </Drawer>
    </div>
  )
}

export default ProfileNavigation